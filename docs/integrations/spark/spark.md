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

### Installation

:::warning
Post version `1.8.0`, the artifact identifier for `io.openlineage:openlineage-spark` has been
updated. For subsequent versions,
utilize `io.openlineage:openlineage-spark_${SCALA_BINARY_VERSION}:${OPENLINEAGE_SPARK_VERSION}`,
ensuring compatibility with your Spark's Scala version to prevent runtime issues.
:::

To integrate OpenLineage Spark with your application, you can:

- Bundle the package with your application build.
- Place the JAR in the `${SPARK_HOME}/jars` directory.
- Use the `--jars` option with `spark-submit`.
- Use the `--packages` option with `spark-submit`.

#### Adding the Package to Your Build

:::info
This approach requires further configuration for the listener, either by
modifying `spark-defaults.conf` at `${SPARK_HOME}/conf/spark-defaults.conf` or by setting it
directly within your application code when creating a `SparkSession` or `SparkConf`. For Spark
configuration details, consult the official Apache Spark documentation.
:::

For Maven, add the following to your `pom.xml`:

```xml
<dependency>
    <groupId>io.openlineage</groupId>
  <artifactId>openlineage-spark_${SCALA_BINARY_VERSION}</artifactId>
  <version>${OPENLINEAGE_SPARK_VERSION}</version>
</dependency>
```

For Gradle, add this to your `build.gradle`:

```groovy
implementation "io.openlineage:openlineage-spark_${SCALA_BINARY_VERSION}:${OPENLINEAGE_SPARK_VERSION}"
```

#### Adding the JAR to Your `${SPARK_HOME}/jars` Directory

:::info
This method does not include listener configuration steps. It is advised to configure the listener
via a modified `spark-defaults.conf` file in `${SPARK_HOME}/conf`. For Spark configuration details,
consult the official Apache Spark documentation.
:::

1. Download the JAR and its checksum from Maven Central.
2. Verify the JAR's integrity using the checksum.
3. Upon successful verification, move the JAR to `${SPARK_HOME}/jars`.

This script automates the download and verification process:

```bash
#!/usr/bin/env bash

# Ensure SPARK_HOME is set
if [ -z "$SPARK_HOME" ]; then
    echo "SPARK_HOME is not set. Please define it as your Spark installation directory."
    exit 1
fi

# Variables
OPENLINEAGE_SPARK_VERSION='1.9.0'  # Example version
SCALA_BINARY_VERSION='2.13'        # Example Scala version
ARTIFACT_ID="openlineage-spark_${SCALA_BINARY_VERSION}"
JAR_NAME="${ARTIFACT_ID}-${OPENLINEAGE_SPARK_VERSION}.jar"
CHECKSUM_NAME="${JAR_NAME}.sha512"
BASE_URL="https://repo1.maven.org/maven2/io/openlineage/${ARTIFACT_ID}/${OPENLINEAGE_SPARK_VERSION}"

# Download JAR and checksum
curl -O "${BASE_URL}/${JAR_NAME}"
curl -O "${BASE_URL}/${CHECKSUM_NAME}"

# Verify JAR integrity
echo "$(cat ${CHECKSUM_NAME})  ${JAR_NAME}" | sha512sum -c

# Move JAR to SPARK_HOME/jars if checksum is valid
if [ $? -eq 0 ]; then
    mv "${JAR_NAME}" "${SPARK_HOME}/jars"
else
    echo "Checksum verification failed."
    exit 1
fi
```

#### Using the `--jars` Option with `spark-submit`

1. Download the JAR and its checksum from Maven Central.
2. Verify the JAR's integrity using the checksum.
3. Upon successful verification, move the JAR to `${SPARK_HOME}/jars`.

This script automates the download and verification process:

```bash
#!/usr/bin/env bash

# Set environment variables
OPENLINEAGE_SPARK_VERSION='1.9.0'  # Example version
SCALA_BINARY_VERSION='2.13'        # Example Scala version
ARTIFACT_ID="openlineage-spark_${SCALA_BINARY_VERSION}"
JAR_NAME="${ARTIFACT_ID}-${OPENLINEAGE_SPARK_VERSION}.jar"
CHECKSUM_NAME="${JAR_NAME}.sha512"
BASE_URL="https://repo1.maven.org/maven2/io/openlineage/${ARTIFACT_ID}/${OPENLINEAGE_SPARK_VERSION}"

# Download JAR and checksum
curl -O "${BASE_URL}/${JAR_NAME}"
curl -O "${BASE_URL}/${CHECKSUM_NAME}"

# Verify JAR integrity
echo "$(cat ${CHECKSUM_NAME})  ${JAR_NAME}" | sha512sum -c

# Move JAR to SPARK_HOME/jars if checksum is valid
if [ $? -eq 0 ]; then
    # Spark submit command
    spark-submit --jars "path/to/${JAR_NAME}" \
        --conf "spark.openlineage.transport.type=http" \
        --conf "spark.openlineage.transport.url=${OPENLINEAGE_CLIENT_HOST}/api/v1/lineage" \
        --class com.mycompany.MySparkApp my_application.jar
else
    echo "Checksum verification failed."
    exit 1
fi
```

#### Using the `--packages` Option with `spark-submit`

Spark allows you to add packages at runtime using the `--packages` option with `spark-submit`. This
option automatically downloads the package from Maven Central (or other configured repositories)
and adds it to the classpath.

```bash
#!/usr/bin/env bash

# Set environment variables
OPENLINEAGE_SPARK_VERSION='1.9.0'  # Example version
SCALA_BINARY_VERSION='2.13'        # Example Scala version
OPENLINEAGE_CLIENT_HOST='http://localhost:5000'  # Example OpenLineage client host

# Spark submit command
spark-submit --packages "io.openlineage:openlineage-spark_${SCALA_BINARY_VERSION}:${OPENLINEAGE_SPARK_VERSION}" \
    --conf "spark.openlineage.transport.type=http" \
    --conf "spark.openlineage.transport.url=${OPENLINEAGE_CLIENT_HOST}/api/v1/lineage" \
    --class com.mycompany.MySparkApp my_application.jar
```

### Configuration

Configure the listener via SparkConf parameters, following standard Spark configuration practices.
This can be done by:

1. Setting them directly in your application when constructing a `SparkSession` or `SparkConf`.
2. Using the `--conf` option with `spark-submit`.
3. Adding them to the `spark-defaults.conf` file at `${SPARK_HOME}/conf`.

#### Spark Config Parameters

The following parameters can be specified:

| Parameter                                          | Definition                                                                                                                                          | Example                             |
----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------
| spark.openlineage.transport.type                   | The transport type used for event emit, default type is `console`                                                                                   | http                                |
| spark.openlineage.namespace                        | The default namespace to be applied for any jobs submitted                                                                                          | MyNamespace                         |
| spark.openlineage.parentJobName                    | The job name to be used for the parent job facet                                                                                                    | ParentJobName                       |
| spark.openlineage.parentRunId                      | The RunId of the parent job that initiated this Spark job                                                                                           | xxxx-xxxx-xxxx-xxxx                 |
| spark.openlineage.appName                          | Custom value overwriting Spark app name in events                                                                                                   | AppName                             |
| spark.openlineage.facets.disabled                  | List of facets to disable, enclosed in `[]` (required from 0.21.x) and separated by `;`, default is `[spark_unknown;]` (currently must contain `;`) | \[spark_unknown;spark.logicalPlan\] |
| spark.openlineage.capturedProperties               | comma separated list of properties to be captured in spark properties facet (default `spark.master`, `spark.app.name`)                              | "spark.example1,spark.example2"     |
| spark.openlineage.dataset.removePath.pattern       | Java regular expression that removes `?<remove>` named group from dataset path. Can be used to last path subdirectories from paths like `s3://my-whatever-path/year=2023/month=04` | `(.*)(?<remove>\/.*\/.*)`     |
| spark.openlineage.jobName.appendDatasetName        | Decides whether output dataset name should be appended to job name. By default `true`.                                                                                             | false                               |
| spark.openlineage.jobName.replaceDotWithUnderscore | Replaces dots in job name with underscore. Can be used to mimic legacy behaviour on Databricks platform. By default `false`.                                                       | false                               |
| spark.openlineage.debugFacet                       | Determines whether debug facet shall be generated and included within the event. Set `enabled` to turn it on. By default, facet is disabled.                                       | enabled                             |


##### HTTP

| Parameter                                    | Definition                                                                                                                                  | Example               |
----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------
| spark.openlineage.transport.endpoint          | Path to resource                                                                                                                            | /api/v1/lineage       |
| spark.openlineage.transport.auth.type         | The type of authentication method to use                                                                                                    | api_key               |
| spark.openlineage.transport.auth.apiKey       | An API key to be used when sending events to the OpenLineage server                                                                         | abcdefghijk           |
| spark.openlineage.transport.timeout           | Timeout for sending OpenLineage info in milliseconds                                                                                        | 5000                  |
| spark.openlineage.transport.urlParams.xyz     | A URL parameter (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |
| spark.openlineage.transport.url               | The hostname of the OpenLineage API server where events should be reported, it can have other properties embeded                            | http://localhost:5000 |
| spark.openlineage.transport.headers.xyz       | Request headers (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |

###### URL

You can supply http parameters using values in url, the parsed `spark.openlineage.*` properties are located in url as follows:

`{transport.url}/{transport.endpoint}/namespaces/{namespace}/jobs/{parentJobName}/runs/{parentRunId}?app_name={appName}&api_key={transport.apiKey}&timeout={transport.timeout}&xxx={transport.urlParams.xxx}`

example:

`http://localhost:5000/api/v1/namespaces/ns_name/jobs/job_name/runs/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx?app_name=app&api_key=abc&timeout=5000&xxx=xxx`

##### Kinesis
If `spark.openlineage.transport.type` is set to `kinesis`, then the below parameters would be read and used when building KinesisProducer.
Also, KinesisTransport depends on you to provide artifact `com.amazonaws:amazon-kinesis-producer:0.14.0` or compatible on your classpath.

| Parameter                                     | Definition                                                                                                                                                                                   | Example          |
-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------
| spark.openlineage.transport.streamName        | Required, the streamName of the Kinesis Stream                                                                                                                                               | some-stream-name |
| spark.openlineage.transport.region            | Required, the region of the stream                                                                                                                                                           | us-east-2        |
| spark.openlineage.transport.roleArn           | Optional, the roleArn which is allowed to read/write to Kinesis stream                                                                                                                       | some-role-arn    |
| spark.openlineage.transport.properties.[xxx]  | Optional, the [xxx] is property of [Kinesis allowd properties](https://github.com/awslabs/amazon-kinesis-producer/blob/master/java/amazon-kinesis-producer-sample/default_config.properties) | 1                |

##### Kafka
If `spark.openlineage.transport.type` is set to `kafka`, then the below parameters would be read and used when building KafkaProducer.

| Parameter                                    | Definition                                      | Example    |
----------------------------------------------|-------------------------------------------------|------------
| spark.openlineage.transport.topicName        | Required, name of the topic                     | topic-name |
| spark.openlineage.transport.localServerId    | Required, id of local server                    | xxxxxxxx   |
| spark.openlineage.transport.properties.[xxx] | Optional, the [xxx] is property of Kafka client | 1          |



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
