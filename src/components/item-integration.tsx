import React from "react"
import { ArrowRight } from "react-feather"
export const ItemIntegration = ({ data, even }) => {

    let datasources = data.datasources.split(',')

    let rowList = datasources.map((datasource, index) => {
        return (
            <tr className={`integration-item`} key={index}>
                {index === 0 && (
                    <td className="int-desc" rowSpan={datasources.length}>
                        <h3 className="mt-0"><a href={data.slug} title={"Read More"}>{data.title}</a></h3>
                        <p>{data.description}</p>
                    </td>
                )}

                {index === 0 && (
                    <td rowSpan={datasources.length}>
                        {data.version.split(',').map((item, i) => <p key={i}>{item}</p>)}
                    </td>
                )}
                <td className="int-datasources">
                    <p>{datasource}</p>
                </td>
                {index === 0 && (
                    <td rowSpan={datasources.length}>
                        <ul>
                            <li className="mb-2 text-color-2"><a href={data.slug} title={"Read More"}>Docs <ArrowRight className="inline-block" /></a></li>
                            {data.github && (
                                <li className="mb-2 text-color-2"><a href={data.github} title={"Read More"}>GitHub <ArrowRight className="inline-block" /></a></li>
                            )}

                            {data.blog && (
                                <li className="mb-2 text-color-2"><a href={data.blog} title={"Read More"}>Blog <ArrowRight className="inline-block" /></a></li>
                            )}
                        </ul>
                    </td>
                )}
            </tr>
        )
    })

    return rowList
}

export default ItemIntegration;