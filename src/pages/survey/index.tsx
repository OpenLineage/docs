import * as React from 'react';
import Layout from '@theme/Layout';
import Footer from "../../components/footer";

export default function Main(): JSX.Element {
    const seoTitle = 'Survey';
    const seoDescription = '';
  
    return (
      <Layout title={seoTitle} description={seoDescription}>
        <div className="m-20">
          <img src={require(`@site/static/survey/Section1@2x.png`).default} />
          <img src={require(`@site/static/survey/Section2@2x.png`).default} />
          <img src={require(`@site/static/survey/Section3@2x.png`).default} />
        </div>
        <div className="mb-0">
          <Footer />
        </div>
      </Layout>
    );
  }
  