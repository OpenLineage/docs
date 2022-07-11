---
sidebar_position: 3
---

# Apache Spark

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

## How to Use the Integration
Adding OpenLineage metadata collection to existing Spark jobs was designed to be straightforward
and unobtrusive to the application. The Spark integration works as either a `javaagent` or as a
`SparkListener`.

### SparkListener
The `SparkListener` approach is very simple and covers most cases. The listener simply analyzes
events, as they are posted by the SparkContext, and extracts job and dataset metadata that are
exposed by the RDD and Dataframe dependency graphs. Most data sources, such as filesystem sources
(including S3 and GCS), JDBC backends, and warehouses such as Redshift and Bigquery can be analyzed
and reported in this way.

#### spark-submit
The listener can be enabled by adding the following configuration to a `spark-submit` command:

```bash
spark-submit --conf "spark.extraListeners=marquez.spark.agent.SparkListener" \
    --packages "io.github.marquezproject:marquez-spark:0.15.1" \
    --conf "openlineage.host=http://<your_ol_endpoint>" \
    --conf "openlineage.namespace=my_job_namespace" \
    --class com.mycompany.MySparkApp my_application.jar
```

Additional configuration can be set if applicable
<table>
  <tbody>
<tr>
  <th>Configuration Key</th>
  <th>Description</th>
  <th>Default</th>
</tr>
<tr>
  <td>openlineage.parentJobName</td>
  <td>The job name of the parent job that triggered this Spark application</td>
  <td></td>
</tr>

<tr>
  <td>openlineage.parentRunId</td>
  <td>The RunId of the parent job Run that triggered this Spark application</td>
  <td>&nbsp;</td>
</tr>

<tr>
  <td>openlineage.apiKey</td>
  <td>The API Key used to authenticate with the OpenLineage server that collects events</td>
  <td>&nbsp;</td>
</tr>

<tr>
  <td>openlineage.version</td>
  <td>The API version of the OpenLineage specification</td>
  <td>1</td>
</tr>
  </tbody>
</table>

#### spark-defaults.conf
Alternatively, the same configuration parameters can be added to the `spark-defaults.conf` file on
cluster creation. Add the following key/value parameters to the `spark-defaults.conf` file:

```
spark.jars.packages    io.github.marquezproject:marquez-spark:0.15.1
spark.extraListeners   marquez.spark.agent.SparkListener
openlineage.host       http://<your_ol_endpoint>
openlineage.namespace  my_job_namespace
```

The optional keys defined above can also be added here. When the job is submitted, additional or
overriding configuration values can be supplied. E.g., the `openlineage.host` and `openlineage.namespace`
can be defined in the `spark-defaults.conf` file and the `openlineage.parentRunId` and `openlineage.parentJobName`
configuration can be supplied when the job is submitted by the parent job.

### Javaagent
The Javaagent approach is the earliest approach to adding lineage events. It was aimed to support
instrumenting Spark code directly by manipulating bytecode at runtime. In the case of Dataframe or
RDD code that doesn't expose the underlying datasource directly, the javaagent approach will allow
injecting bytecode at runtime to expose the required information. This approach requires being able
to add the `marquez-spark` jar on the driver host and adding the correct JVM startup parameters. This
may not be possible, e.g., on a serverless Spark platform, such as AWS Glue.

#### spark-submit
The following configuration must be added to the `spark-submit` command when the job is submitted:

```bash
spark-submit --conf spark.driver.extraJavaOptions=-javaagent:<marquez-spark-jar-location>=http://<your_ol_endpoint>/api/v1/namespaces/<your_job_namespace>/?api_key=<optional_api_key>
```

If a parent job run is triggering the Spark job run, the parent job's name and Run id can be included as such:

```bash
spark-submit --conf spark.driver.extraJavaOptions=-javaagent:<marquez-spark-jar-location>=http://<your_ol_endpoint>/api/v1/namespaces/<your_job_namespace>/jobs/<parent_job_name>/runs/<parent_run_id>?api_key=<optional_api_key>
```

### From Airflow
The same parameters passed to `spark-submit` can be supplied from Airflow and other schedulers. If
using the [marquez-airflow](airflow.md) integration, each task in the DAG has its own Run id
which can be connected to the Spark job run via the `openlineage.parentRunId` parameter. For example,
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
      "spark.extraListeners": "marquez.spark.agent.SparkListener",
      "spark.jars.packages": "io.github.marquezproject:marquez-spark:0.15.+",
      "openlineage.url": f"{marquez_url}/api/v1/namespaces/{marquez_namespace}/jobs/dump_orders_to_gcs/runs/{{{{task_run_id(run_id, task)}}}}?api_key={api_key}"
    },
    dag=dag)
```

The same job can be submitted using the `javaagent` approach:
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
      'spark.driver.extraJavaOptions':
        f"-javaagent:marquez-spark-0.15.0.jar={marquez_url}/api/v1/namespaces/{marquez_namespace}/jobs/dump_orders_to_gcs/runs/{{{{task_run_id(run_id, task)}}}}?api_key={api_key}"
    files="https://repo1.maven.org/maven2/io/github/marquezproject/marquez-spark/0.15.0/marquez-spark-0.15.0.jar",
    dag=dag)
```
