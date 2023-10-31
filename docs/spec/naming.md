---
sidebar_position: 3
---

# Naming Conventions

Employing a unique naming strategy per resource ensures that the spec is followed uniformly regardless of metadata producer.

Jobs and Datasets have their own namespaces, job namespaces being derived from schedulers and dataset namespaces from datasources.

## Dataset Naming

A dataset, or `table`, is organized according to a producer, namespace, database and (optionally) schema.

| Producer | Namespace | Name | Example Namespace | Example Name |
| -------- | --------- | ---- | ----------------- | ------------ |
| Postgres | postgres + host + port | database + schema + table | postgres://db.foo.com:6543 | metrics.sales.orders |
| MySQL | mysql + host + port | database + table | mysql://db.foo.com:6543 | metrics.orders | 
| S3 | s3 + bucket | path | s3://sales-metrics | orders.csv |
| GCS | gcs + bucket | path | gcs://sales-metrics | orders.csv |
| HDFS | hdfs + host + port | path | hdfs://stg.foo.com:3000 | salesorders.csv |
| BigQuery | bigquery |  project + dataset + table | bigquery | metrics.sales.orders |
| Redshift | redshift + host + port | database + schema + table | redshift://examplecluster.XXXXXXXXXXXX.us-west-2.redshift.amazonaws.com:5439 | metrics.sales.orders |
| Athena | awsathena + host | catalog + database + table | awsathena://athena.us-west-2.amazonaws.com | metrics.sales.orders |
| Azure Synapse | producer + host + port | database + schema + table | sqlserver://XXXXXXXXXXXX.sql.azuresynapse.net:1433 | SQLPool1/sales.orders |
| Azure Cosmos DB | producer + host | database + 'colls' + table | azurecosmos://XXXXXXXXXXXX.documents.azure.com/dbs | metrics.colls.orders |

## Job Naming

A `Job` is a recurring data transformation with inputs and outputs. Each execution is captured as a `Run` with corresponding metadata.
A `Run` event identifies the `Job` it instances by providing the job’s unique identifier.
The `Job` identifier is composed of a `Namespace` and `Name`. The job name is unique within its namespace.


| Producer | Formula | Example |
| -------- | ------- | ------- |
| Airflow | namespace + DAG + task | airflow-staging.orders_etl.count_orders |
| SQL | namespace + name | gx.validate_datasets |

## Run Naming

Runs are named using client-generated UUIDs. The OpenLineage client is responsible for generating them and maintaining them throughout the duration of the runcycle.

```python
from openlineage.client.run import Run
run = Run(str(uuid4()))
```

## Why Naming Matters

Naming enables focused insight into data flows, even when datasets and workflows are distributed across an organization. This focus enabled by naming is key to the production of useful lineage.

![image](./naming-correlations.svg)

## Additional Resources

* [The OpenLineage Naming Spec](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md)
* [What's in a Namespace Blog Post](https://openlineage.io/blog/whats-in-a-namespace/)
