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

| System               | Mechanism         | Metadata Gathered                                           |
|:---------------------|:------------------|:------------------------------------------------------------|
| Airflow              | BigQueryOperator  | Lineage (from BQ API)<br />Schema details<br />Job duration |
| Airflow              | SnowFlakeOperator | Lineage (SQL parsing)<br />Job duration                     |
| Airflow              | PostgresOperator  | Lineage (SQL parsing)<br />Job duration                     |
| Airflow              | SqlCheckOperator  | Data quality assertions                                     |
| Great Expectations   | Action            | Data quality assertions                                     |
| Spark                | SparkListener     | Schema, rowcount, column-level lineage                      |
| Snowflake            | Access History    | Lineage via polling of query logs                           |

## Integration strategies

### Integrating with pipelines

![Integrating with Pipelines](integrate-pipelines.svg)

### Integrating with data sources

![Integrating with Data Sources](integrate-datasources.svg)
