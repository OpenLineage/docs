import React, { useEffect } from "react"
import Layout from '@theme/Layout'
import IntegrationItem from "../../components/item-integration"
import { getPageData } from "../../components/utils"

export default function integrationList({ }: JSX.Element) {
    const seoTitle = 'Integrations';
    const seoDescription = "Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used.";

    const filesData = [
        require('./apache-airflow/index.mdx'),
        require('./apache-spark/index.mdx'),
        require('./dbt/index.mdx')
    ];

    const data = filesData.map(e => {
        return getPageData(e)
    })

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'))
    }, [])

    const integrationItems = data.map((item, i) => (
        <IntegrationItem data={item} key={i} even={(i + 1) % 2 === 0} />
    ))

    return (
        <Layout title={seoTitle} description={seoDescription}>
            <div className="boxed">
                <div className="title px-4 py-12 text-center lg:py-14 lg:px-0">
                    <h2 className="text-5xl text-color-1">
                        Integrations
                    </h2>
                </div>
                <div className="px-4 py-12 lg:py-14 lg:px-0">
                    <p>OpenLineage connectors have been created for major job schedulers and data platforms. By using these connectors, the appropriate API calls will be made automatically each time your pipeline executes. They capture information about datasets, jobs, and runs, allowsing you to study lineage across multiple data sources.</p>
                    <table className="integration-list">
                        <thead>
                            <tr>
                                <th>
                                    Platform
                                </th>
                                <th>
                                    Version
                                </th>
                                <th>
                                    Data Sources
                                </th>
                                <th>
                                    Resources
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {integrationItems}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}