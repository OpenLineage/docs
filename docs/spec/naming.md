---
sidebar_position: 3
---

# Naming Conventions

:::info
This page has some initial content but is not yet complete. Contributions are welcome via the Edit link below.
:::

Employing a unique naming strategy per resource ensures that the spec is followed uniformly regardless of metadata producer.

Jobs and Datasets have their own namespaces, job namespaces being derived from schedulers and dataset namespaces from datasources.

## Dataset Naming

A dataset, or `table`, is organized according to a producer, namespace, database and (optionally) schema.

| Producer | Formula                  | Example URI                                  |
| --------- | ------------------------- | ----------------------------------------- |
| Postgres | producer + host + port + database + table   | postgres://db.foo.com:6543/metrics.sales.orders |
| MySQL | producer + host + port + database + table | mysql://db.foo.com:6543/metrics.orders | 
| S3 | producer + bucket + path             | s3://sales-metrics/orders.csv             |
| GCS | producer + bucket + path | gcs://sales-metrics/orders.csv |
| HDFS | producer + host + port + path        | hdfs://stg.foo.com:3000/salesorders.csv   |
| BigQuery | producer + project + dataset + table | bigquery:metrics.sales.orders             |
| Redshift | producer + host + port + database + schema + table | redshift://examplecluster.XXXXXXXXXXXX.us-west-2.redshift.amazonaws.com:5439/metrics.sales.orders |
| Athena | producer + host + catalog + database + table | awsathena://athena.us-west-2.amazonaws.com/metrics.sales.orders |
| Azure Synapse | producer + host + port + database + schema + table | sqlserver://XXXXXXXXXXXX.sql.azuresynapse.net:1433;database=SQLPool1/sales.orders |
| Azure Cosmos DB | producer + host + database + 'colls' + table | azurecosmos://XXXXXXXXXXXX.documents.azure.com/dbs/metrics/colls/orders |

## Job Naming

A `Job` is a recurring data transformation with inputs and outputs. Each execution is captured as a `Run` with corresponding metadata.
A `Run` event identifies the `Job` of which it is an instance by providing the job’s unique identifier.
The `Job` identifier is composed of a `Namespace` and a `Name`. The job name is unique within that namespace.


| Formula                   | Example                     |
| -------------------------- | ---------------------------- |
| namespace + name         | staging.load_orders_from_csv |
| namespace + project + name | prod.orders_etl.count_orders |

## Run Naming

Runs are named using client-generated UUIDs. The client is responsible for generating them and maintaining them throughout the duration of the runcycle.

```python
from openlineage.client.run import Run
run = Run(str(uuid4()))
```

## Why Naming Matters

![image](./naming-correlations.svg)

## Additional Resources

* [The OpenLineage Naming Spec](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md)