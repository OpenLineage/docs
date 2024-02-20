---
sidebar_position: 1
title: Apache Spark
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

* Version `1.8.0` and earlier only supported Scala 2.12 variants of Apache Spark.
* Version `1.9.0` and later support both Scala 2.12 and 2.13 variants of Apache Spark.

The above necessitates a change in the artifact identifier for `io.openlineage:openlineage-spark`.
After version `1.8.0`, the artifact identifier has been updated. For subsequent versions, utilize:
`io.openlineage:openlineage-spark_${SCALA_BINARY_VERSION}:${OPENLINEAGE_SPARK_VERSION}`.
:::

To integrate OpenLineage Spark with your application, you can:

- [Bundle the package with your Apache Spark application project](#bundle-the-package-with-your-apache-spark-application-project).
- [Place the JAR in your `${SPARK_HOME}/jars` directory](#place-the-jar-to-your-spark_homejars-directory)
- [Use the `--jars` option with `spark-submit / spark-shell / pyspark`](#use-the---jars-option-with-spark-submit--spark-shell--pyspark)
- [Use the `--packages` option with `spark-submit / spark-shell / pyspark`](#use-the---packages-option-with-spark-submit--spark-shell--pyspark)

#### Bundle the package with your Apache Spark application project

:::info
This approach does not demonstrate how to configure the `OpenLineageSparkListener`.
Please refer to the [Configuration](#configuration) section.
:::

For Maven, add the following to your `pom.xml`:

<Tabs groupId="spark">
<TabItem value="after-1.8.0" label="After 1.8.0">

```xml
<dependency>
  <groupId>io.openlineage</groupId>
  <artifactId>openlineage-spark_${SCALA_BINARY_VERSION}</artifactId>
  <version>${OPENLINEAGE_SPARK_VERSION}</version>
</dependency>
```

</TabItem>
<TabItem value="1.8.0-and-earlier" label="1.8.0 and earlier">

```xml

<dependency>
  <groupId>io.openlineage</groupId>
  <artifactId>openlineage-spark</artifactId>
  <version>${OPENLINEAGE_SPARK_VERSION}</version>
</dependency>
```

</TabItem>
</Tabs>

For Gradle, add this to your `build.gradle`:

<Tabs groupId="spark">
<TabItem value="after-1.8.0" label="After 1.8.0">

```groovy
implementation("io.openlineage:openlineage-spark_${SCALA_BINARY_VERSION}:${OPENLINEAGE_SPARK_VERSION}")
```

</TabItem>
<TabItem value="1.8.0-and-earlier" label="1.8.0 and earlier">

```groovy
implementation("io.openlineage:openlineage-spark:${OPENLINEAGE_SPARK_VERSION}")
```

</TabItem>
</Tabs>

#### Place the JAR to your `${SPARK_HOME}/jars` directory

:::info
This approach does not demonstrate how to configure the `OpenLineageSparkListener`.
Please refer to the [Configuration](#configuration) section.
:::

1. Download the JAR and its checksum from Maven Central.
2. Verify the JAR's integrity using the checksum.
3. Upon successful verification, move the JAR to `${SPARK_HOME}/jars`.

This script automates the download and verification process:

<Tabs groupId="spark">
<TabItem value="after-1.8.0" label="After 1.8.0">

```bash
#!/usr/bin/env bash

if [ -z "$SPARK_HOME" ]; then
    echo "SPARK_HOME is not set. Please define it as your Spark installation directory."
    exit 1
fi

OPENLINEAGE_SPARK_VERSION='1.9.0'  # Example version
SCALA_BINARY_VERSION='2.13'        # Example Scala version
ARTIFACT_ID="openlineage-spark_${SCALA_BINARY_VERSION}"
JAR_NAME="${ARTIFACT_ID}-${OPENLINEAGE_SPARK_VERSION}.jar"
CHECKSUM_NAME="${JAR_NAME}.sha512"
BASE_URL="https://repo1.maven.org/maven2/io/openlineage/${ARTIFACT_ID}/${OPENLINEAGE_SPARK_VERSION}"

curl -O "${BASE_URL}/${JAR_NAME}"
curl -O "${BASE_URL}/${CHECKSUM_NAME}"

echo "$(cat ${CHECKSUM_NAME})  ${JAR_NAME}" | sha512sum -c

if [ $? -eq 0 ]; then
    mv "${JAR_NAME}" "${SPARK_HOME}/jars"
else
    echo "Checksum verification failed."
    exit 1
fi
```

</TabItem>
<TabItem value="1.8.0-and-earlier" label="1.8.0 and earlier">

```bash
#!/usr/bin/env bash

if [ -z "$SPARK_HOME" ]; then
    echo "SPARK_HOME is not set. Please define it as your Spark installation directory."
    exit 1
fi

OPENLINEAGE_SPARK_VERSION='1.8.0'  # Example version
ARTIFACT_ID="openlineage-spark"
JAR_NAME="${ARTIFACT_ID}-${OPENLINEAGE_SPARK_VERSION}.jar"
CHECKSUM_NAME="${JAR_NAME}.sha512"
BASE_URL="https://repo1.maven.org/maven2/io/openlineage/${ARTIFACT_ID}/${OPENLINEAGE_SPARK_VERSION}"

curl -O "${BASE_URL}/${JAR_NAME}"
curl -O "${BASE_URL}/${CHECKSUM_NAME}"

echo "$(cat ${CHECKSUM_NAME})  ${JAR_NAME}" | sha512sum -c

if [ $? -eq 0 ]; then
    mv "${JAR_NAME}" "${SPARK_HOME}/jars"
else
    echo "Checksum verification failed."
    exit 1
fi
```

</TabItem>
</Tabs>

#### Use the `--jars` option with `spark-submit / spark-shell / pyspark`

:::info
This approach does not demonstrate how to configure the `OpenLineageSparkListener`.
Please refer to the [Configuration](#configuration) section.
:::

1. Download the JAR and its checksum from Maven Central.
2. Verify the JAR's integrity using the checksum.
3. Upon successful verification, submit a Spark application with the JAR using the `--jars` option.

This script demonstrate this process:

<Tabs groupId="spark">
<TabItem value="after-1.8.0" label="After 1.8.0">

```bash
#!/usr/bin/env bash

OPENLINEAGE_SPARK_VERSION='1.9.0'  # Example version
SCALA_BINARY_VERSION='2.13'        # Example Scala version
ARTIFACT_ID="openlineage-spark_${SCALA_BINARY_VERSION}"
JAR_NAME="${ARTIFACT_ID}-${OPENLINEAGE_SPARK_VERSION}.jar"
CHECKSUM_NAME="${JAR_NAME}.sha512"
BASE_URL="https://repo1.maven.org/maven2/io/openlineage/${ARTIFACT_ID}/${OPENLINEAGE_SPARK_VERSION}"

curl -O "${BASE_URL}/${JAR_NAME}"
curl -O "${BASE_URL}/${CHECKSUM_NAME}"

echo "$(cat ${CHECKSUM_NAME})  ${JAR_NAME}" | sha512sum -c

if [ $? -eq 0 ]; then
    spark-submit --jars "path/to/${JAR_NAME}" \
      # ... other options
else
    echo "Checksum verification failed."
    exit 1
fi
```

</TabItem>
<TabItem value="1.8.0-and-earlier" label="1.8.0 and earlier">

```bash
#!/usr/bin/env bash

OPENLINEAGE_SPARK_VERSION='1.8.0'  # Example version
ARTIFACT_ID="openlineage-spark"
JAR_NAME="${ARTIFACT_ID}-${OPENLINEAGE_SPARK_VERSION}.jar"
CHECKSUM_NAME="${JAR_NAME}.sha512"
BASE_URL="https://repo1.maven.org/maven2/io/openlineage/${ARTIFACT_ID}/${OPENLINEAGE_SPARK_VERSION}"

curl -O "${BASE_URL}/${JAR_NAME}"
curl -O "${BASE_URL}/${CHECKSUM_NAME}"

echo "$(cat ${CHECKSUM_NAME})  ${JAR_NAME}" | sha512sum -c

if [ $? -eq 0 ]; then
    spark-submit --jars "path/to/${JAR_NAME}" \
      # ... other options
else
    echo "Checksum verification failed."
    exit 1
fi
```

</TabItem>
</Tabs>

#### Use the `--packages` option with `spark-submit / spark-shell / pyspark`

:::info
This approach does not demonstrate how to configure the `OpenLineageSparkListener`.
Please refer to the [Configuration](#configuration) section.
:::

Spark allows you to add packages at runtime using the `--packages` option with `spark-submit`. This
option automatically downloads the package from Maven Central (or other configured repositories)
during runtime and adds it to the classpath of your Spark application.

<Tabs groupId="spark">
<TabItem value="after-1.8.0" label="After 1.8.0">

```bash
OPENLINEAGE_SPARK_VERSION='1.9.0'  # Example version
SCALA_BINARY_VERSION='2.13'        # Example Scala version

spark-submit --packages "io.openlineage:openlineage-spark_${SCALA_BINARY_VERSION}:${OPENLINEAGE_SPARK_VERSION}" \
    # ... other options
```

</TabItem>
<TabItem value="1.8.0-and-earlier" label="1.8.0 and earlier">

```bash
OPENLINEAGE_SPARK_VERSION='1.8.0'  # Example version

spark-submit --packages "io.openlineage:openlineage-spark::${OPENLINEAGE_SPARK_VERSION}" \
    # ... other options
```

</TabItem>
</Tabs>

### Configuration

Configuring the OpenLineage Spark integration is straightforward. It uses builtin Spark
configuration
mechanisms.

Your options are:

1. [Setting the properties directly in your application](#setting-the-properties-directly-in-your-application).
2. [Using `--conf` options with the CLI](#using---conf-options-with-the-cli).
3. [Adding properties to the `spark-defaults.conf` file in `${SPARK_HOME}/conf`](#adding-properties-to-the-spark-defaultsconf-file-in-spark_homeconf).

#### Setting the properties directly in your application

The below example demonstrates how to set the properties directly in your application when
constructing
a `SparkSession`.

<Tabs groupId="spark-app-conf">
<TabItem value="scala" label="Scala">

```scala
import org.apache.spark.sql.SparkSession

object OpenLineageExample extends App {
  val spark = SparkSession.builder()
    .appName("OpenLineageExample")
    // This line is EXTREMELY important
    .config("spark.extraListeners", "io.openlineage.spark.agent.OpenLineageSparkListener")
    .config("spark.openlineage.transport.type", "http")
    .config("spark.openlineage.transport.url", "http://localhost:5000/api/v1/lineage")
    .config("spark.openlineage.namespace", "MyNamespace")
    .config("spark.openlineage.parentJobName", "ParentJobName")
    .config("spark.openlineage.parentRunId", "xxxx-xxxx-xxxx-xxxx")
    .getOrCreate()

  // ... your code

  spark.stop()
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder
    .appName("OpenLineageExample")
    # This line is EXTREMELY important
.config("spark.extraListeners", "io.openlineage.spark.agent.OpenLineageSparkListener")
    .config("spark.openlineage.transport.type", "http")
    .config("spark.openlineage.transport.url", "http://localhost:5000/api/v1/lineage")
    .config("spark.openlineage.namespace", "MyNamespace")
    .config("spark.openlineage.parentJobName", "ParentJobName")
    .config("spark.openlineage.parentRunId", "xxxx-xxxx-xxxx-xxxx")
    .getOrCreate()

# ... your code

spark.stop()
```

</TabItem>
</Tabs>

#### Using `--conf` options with the CLI

The below example demonstrates how to use the `--conf` option with `spark-submit`.

```bash
spark-submit \
  --conf "spark.extraListeners=io.openlineage.spark.agent.OpenLineageSparkListener" \
  --conf "spark.openlineage.transport.type=http" \
  --conf "spark.openlineage.transport.url=http://localhost:5000/api/v1/lineage" \
  --conf "spark.openlineage.namespace=MyNamespace" \
  --conf "spark.openlineage.parentJobName=ParentJobName" \
  --conf "spark.openlineage.parentRunId=xxxx-xxxx-xxxx-xxxx" \
  # ... other options
```

#### Adding properties to the `spark-defaults.conf` file in `${SPARK_HOME}/conf`

:::warning
You may need to create this file if it does not exist. If it does exist, **we strongly suggest that
you back it up before making any changes**, particularly if you are not the only user of the Spark
installation. A misconfiguration here can have devastating effects on the operation of your Spark
installation, particularly in a shared environment.
:::

The below example demonstrates how to add properties to the `spark-defaults.conf` file.

```properties
spark.extraListeners=io.openlineage.spark.agent.OpenLineageSparkListener
spark.openlineage.transport.type=http
spark.openlineage.transport.url=http://localhost:5000/api/v1/lineage
spark.openlineage.namespace=MyNamespace
```

:::info
The `spark.extraListeners` configuration parameter is **non-additive**. This means that if you set
`spark.extraListeners` via the CLI or via `SparkSession#config`, it will **replace** the value
in `spark-defaults.conf`. This is important to remember if you are using `spark-defaults.conf` to
set a default value for `spark.extraListeners` and then want to override it for a specific job.
:::

:::info
When it comes to configuration parameters like `spark.openlineage.namespace`, a default value can
be supplied in the `spark-defaults.conf` file. This default value can be overridden by the
application at runtime, via the previously detailed methods. However, it is **strongly** recommended
that more dynamic or quickly changing parameters like `spark.openlineage.parentRunId` or
`spark.openlineage.parentJobName` be set at runtime via the CLI or `SparkSession#config` methods.
:::

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
