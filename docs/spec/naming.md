---
sidebar_position: 3
---

# Naming Conventions

Employing a unique naming strategy per resource ensures that the spec is followed uniformly regardless of metadata producer.

Jobs and Datasets have their own namespaces, job namespaces being derived from schedulers and dataset namespaces from datasources.

## Dataset Naming

A dataset, or `table`, is organized according to a producer, namespace, database and (optionally) schema.

| Data Store | Type | Namespace | Name | Format | 
|:-----------|:-----------|:---------------------|:-----------------|:-----------|
| Athena | Warehouse | Host | Catalog, Database, Table | awsathena://athena.{region_name}.amazonaws.com/{catalog}.{database}.{table} |
| Azure Cosmos DB | Warehouse | Host, Database | Schema, Table | azurecosmos://{host}/dbs/{database}/colls/{table} |
| Azure Data Explorer | Warehouse | Host | Database, Table | azurekusto://{host}.kusto.windows.net/{database}/{table} | 
| Azure Synapse | Warehouse | Host, Port, Database | Schema, Table | sqlserver://{host}:{port};database={database}/{schema}.{table} |
| BigQuery | Warehouse | bigquery | Project ID, dataset, table | bigquery://{project id}.{dataset name}.{table name} |
| Cassandra | Warehouse | Host, Port | Keyspace, Table | cassandra://{host}:{port}/{keyspace}.{table} |
| MySQL | Warehouse | Host, Port | Database, Table | mysql://{host}:{port}/{database}.{table} | 
| Postgres | Warehouse | Host, Port | Database, Schema, Table | postgres://{host}:{port}/{database}.{schema}.{table} |
| Redshift | Warehouse | Host, Port | Database, Schema, Table | redshift://{cluster_identifier}.{region_name}:{port}/{database}.{schema}.{table} |
| Snowflake | Warehouse | account identifier (composite of organization name and account name) | Database, Schema, Table | snowflake://{organization name}-{account name}/{database}.{schema}.{table} | 
| Trino | Warehouse | Host, Port | Catalog, Schema, Table | trino://{host}:{port}/{catalog}.{schema}.{table} |
| ABFSS (Azure Data Lake Gen2) | Data lake | container, service | path | abfss://{container name}@{service name}/{path} |
| DBFS (Databricks File System) | Distributed file system | workspace | path | hdfs://{workspace name}/{path} |
| GCS | Blob storage | bucket | path | gs://{bucket name}/{path} |
| HDFS | Distributed file system | Namenode host and port | path | hdfs://{namenode host}:{namenode port}/{path} |
| Kafka | distributed event streaming platform | bootstrap server host and port | topic | kafka://{bootstrap server host}:{port}/{topic name} |
| Local file system | File system | Host | Path | file://{host}/{path} |
| S3 | Blob Storage | bucket name | path | s3://{bucket name}/{path} |
| WASBS (Azure Blob Storage) | Blob Storage | container, service | path | wasbs://{container name}@{service name}/{path} |

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
from openlineage.client.uuid import generate_new_uuid
run = Run(str(generate_new_uuid()))
```

## Why Naming Matters

Naming enables focused insight into data flows, even when datasets and workflows are distributed across an organization. This focus enabled by naming is key to the production of useful lineage.

![image](./naming-correlations.svg)

## Additional Resources

* [The OpenLineage Naming Spec](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md)
* [What's in a Namespace Blog Post](https://openlineage.io/blog/whats-in-a-namespace/)
