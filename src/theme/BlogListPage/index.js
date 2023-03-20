import React from 'react';
import Layout from '@theme/Layout';
import ItemBlog from "../../components/item-blog"

export default function BlogListPageWrapper(props) {
  const { metadata, items } = props;
  const seoTitle = 'Blog';
  const seoDescription = 'Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used.';

  const blogList = items.map((item, i) => (
    <ItemBlog data={item.content} key={`b-item-index-${i}`} />
  ))

  return (
    <Layout title={seoTitle} description={seoDescription}>
      <div className="container mx-auto px-0 pb-40">
        <div className="px-4 py-12 text-center lg:py-14 lg:px-0">
          <h2 className="text-color-1 text-5xl lg:text-6xl">
            Blog
          </h2>
        </div>
        <div className="flex flex-wrap">{blogList}</div>
        <div className="pagination pt-8">
          <ul className="text-center">
            {metadata?.previousPage &&
              <li className="inline-block align-middle">
                <a title="Next Page" className="rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl " href={metadata?.previousPage}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </span>
                </a>
              </li>
            }
            {[...Array(metadata.totalPages)].map((x, i) =>
              <li className="inline-block align-middle" key={i}>
                <a
                  title="Blog - Page 1"
                  className={i + 1 !== metadata.page ?
                    "rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300"
                    : "rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl bg-gradient-primary text-white shadow-2xl"
                  }
                  href={i === 0 ? "/blog/" : "/blog/page/" + (i + 1)}>
                  <span>{i + 1}</span>
                </a>
              </li>
            )}
            {metadata?.nextPage &&
              <li className="inline-block align-middle">
                <a title="Next Page" className="rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl " href={metadata?.nextPage}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </Layout>
  );
}