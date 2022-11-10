---
sidebar_position: 1
---

# Integrating With OpenLineage

:::info
This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.
:::

## Capability Matrix

:::caution
This matrix is not yet complete.
:::

The matrix below shows the relationship between an input facet and various mechanisms OpenLineage uses to gather metadata. Not all mechanisms collect data to fill in all facets, and some facets are specific to one integration.
✔️: The mechanism does implement this facet.
✖️: The mechanism does not implement this facet.
An empty column means it is not yet documented if the mechanism implements this facet.

| Mechanism          | Integration       | Metadata Gathered                             | InputDatasetFacet | OutputDatasetFacet | SqlJobFacet | SchemaDatasetFacet | DataSourceDatasetFacet | DataQualityMetricsInputDatasetFacet | DataQualityAssertionsDatasetFacet | SourceCodeJobFacet | ExternalQueryRunFacet | DocumentationDatasetFacet | SourceCodeLocationJobFacet | DocumentationJobFacet | ParentRunFacet |
|:-------------------|:------------------|:----------------------------------------------|:------------------|:-------------------|:------------|:-------------------|:-----------------------|:------------------------------------|:----------------------------------|:-------------------|:----------------------|:--------------------------|:---------------------------|:----------------------|:---------------|
| SnowflakeOperator* | Airflow Extractor | Lineage<br />Job duration                     | ✔️                 | ✔️                  | ✔️           | ✔️                  | ✔️                      | ✖️                                   | ✖️                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |
| BigQueryOperator** | Airflow Extractor | Lineage<br />Schema details<br />Job duration | ✔️                 | ✔️                  | ?           | ✔️                  | ?                      | ?                                   | ?                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |
| PostgresOperator*  | Airflow Extractor | Lineage<br />Job duration                     | ✔️                 | ✔️                  | ✔️           | ✔️                  | ✔️                      | ?                                   | ?                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |
| SqlCheckOperators  | Airflow Extractor | Lineage<br />Data quality assertions          | ✔️                 | ✖️                  | ✔️           | ✔️                  | ✔️                      | ✔️                                   | ✔️                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |
| dbt                | dbt Project Files | Lineage<br />Row count<br />Byte count.       | ✔️                 | ?                  | ?           | ?                  | ?                      | ?                                   | ?                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |
| Great Expectations | Action            | Data quality assertions                       | ✔️                 | ?                  | ?           | ?                  | ?                      | ✔️                                   | ✔️                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |
| Spark              | SparkListener     | Schema<br />Row count<br /> Column lineage    | ✔️                 | ?                  | ?           | ?                  | ?                      | ?                                   | ?                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |
| Snowflake***       | Access History    | Lineage                                       | ?                 | ?                  | ?           | ?                  | ?                      | ?                                   | ?                                 | ?                  | ?                     | ?                         | ?                          | ?                     | ?              |

* Uses the Rest SQL parser
** Uses the BigQuery API
*** Uses Snowflake query logs

## Integration strategies

### Integrating with pipelines

![Integrating with Pipelines](integrate-pipelines.svg)

### Integrating with data sources

![Integrating with Data Sources](integrate-datasources.svg)
