---
sidebar_position: 1
title: Apache Spark
---

:::info
This integration is known to work with Apache Spark 2.4 and later.
:::

Spark jobs typically run on clusters of machines. A single machine hosts the "driver" application,
which constructs a graph of jobs - e.g., reading data from a source, filtering, transforming, and
joining records, and writing results to some sink- and manages execution of those jobs. Spark's
fundamental abstraction is the Resilient Distributed Dataset (RDD), which encapsulates distributed
reads and modifications of records. While RDDs can be used directly, it is far more common to work
with Spark Datasets or Dataframes, which is an API that adds explicit schemas for better performance
and the ability to interact with datasets using SQL. The Dataframe's declarative API enables Spark
to optimize jobs by analyzing and manipulating an abstract query plan prior to execution.

## Collecting Lineage in Spark

Collecting lineage requires hooking into Spark's `ListenerBus` in the driver application and
collecting and analyzing execution events as they happen. Both raw RDD and Dataframe jobs post events
to the listener bus during execution. These events expose the structure of the job, including the
optimized query plan, allowing the Spark integration to analyze the job for datasets consumed and
produced, including attributes about the storage, such as location in GCS or S3, table names in a
relational database or warehouse, such as Redshift or Bigquery, and schemas. In addition to dataset
and job lineage, Spark SQL jobs also report logical plans, which can be compared across job runs to
track important changes in query plans, which may affect the correctness or speed of a job.

A single Spark application may execute multiple jobs. The Spark OpenLineage integration maps one
Spark job to a single OpenLineage Job. The application will be assigned a Run id at startup and each
job that executes will report the application's Run id as its parent job run. Thus, an application
that reads one or more source datasets, writes an intermediate dataset, then transforms that
intermediate dataset and writes a final output dataset will report three jobs- the parent application
job, the initial job that reads the sources and creates the intermediate dataset, and the final job
that consumes the intermediate dataset and produces the final output. As an image:
![image](./spark-job-creation.dot.png)

## About the Integration

This integration employs the `SparkListener` interface through `OpenLineageSparkListener`, offering
a comprehensive monitoring solution. It examines SparkContext-emitted events to extract metadata
associated with jobs and datasets, utilizing the RDD and DataFrame dependency graphs. This method
effectively gathers information from various data sources, including filesystem sources (e.g., S3
and GCS), JDBC backends, and data warehouses such as Redshift and Bigquery.

## How to Use the Integration

Incorporating OpenLineage metadata collection into existing Spark jobs is designed to be simple and
minimally invasive.

### Scheduling from Airflow

The same parameters passed to `spark-submit` can be supplied from Airflow and other schedulers. If
using the [openlineage-airflow](../airflow/airflow.md) integration, each task in the DAG has its own Run id
which can be connected to the Spark job run via the `spark.openlineage.parentRunId` parameter. For example,
here is an example of a `DataProcPySparkOperator` that submits a Pyspark application on Dataproc:

```python
t1 = DataProcPySparkOperator(
    task_id=job_name,
    gcp_conn_id='google_cloud_default',
    project_id='project_id',
    cluster_name='cluster-name',
    region='us-west1',
    main='gs://bucket/your-prog.py',
    job_name=job_name,
    dataproc_pyspark_properties={
      "spark.extraListeners": "io.openlineage.spark.agent.OpenLineageSparkListener",
      "spark.jars.packages": "io.openlineage:openlineage-spark:1.0.0+",
      "spark.openlineage.transport.url": f"{openlineage_url}/api/v1/namespaces/{openlineage_namespace}/jobs/dump_orders_to_gcs/runs/{{{{lineage_run_id(run_id, task)}}}}?api_key={api_key}",
      "spark.openlineage.namespace": openlineage_namespace,
      "spark.openlineage.parentJobName": job_name,
      "spark.openlineage.parentRunId": f"{{{{lineage_run_id(run_id, task)}}}}
    },
    dag=dag)
```
