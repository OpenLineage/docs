---
sidebar_position: 4
title: Apache Flink
---

:::caution
This integration is considered experimental: only specific workflows and use cases are supported.
:::

**Apache Flink** is one of the most popular stream processing frameworks. Apache Flink jobs run on clusters, 
which are composed of two types of nodes: `TaskManagers` and `JobManagers`. While clusters typically consists of 
multiple `TaskManagers`, only reason to run multiple JobManagers is high availability. The jobs are _submitted_
to `JobManager` by `JobClient`, that compiles user application into dataflow graph which is understandable by `JobManager`. 
`JobManager` then coordinates job execution: it splits the parallel units of a job
to `TaskManagers`, manages heartbeats, triggers checkpoints, reacts to failures and much more.

Apache Flink has multiple deployment modes - Session Mode, Application Mode and Per-Job mode. The most popular
are Session Mode and Application Mode. Session Mode consists of a `JobManager` managing multiple jobs sharing single
Flink cluster. In this mode, `JobClient` is executed on a machine that submits the job to the cluster.

Application Mode is used where cluster is utilized for a single job. In this mode, `JobClient`, where the main method runs,
is executed on the `JobManager`.

Flink jobs read data from `Sources` and write data to `Sinks`. In contrast to systems like Apache Spark, Flink jobs can write 
data to multiple places - they can have multiple `Sinks`.

## Getting lineage from Flink

OpenLineage utilizes Flink's `JobListener` interface. This interface is used by Flink to notify user of job submission,
successful finish of job, or job failure. Implementations of this interface are executed on `JobClient`. 

When OpenLineage listener receives information that job was submitted, it extracts `Transformations` from job's 
`ExecutionEnvironment`. The `Transformations` represent logical operations in the dataflow graph; they are composed
of both Flink's build-in operators, but also user-provided `Sources`, `Sinks` and functions. To get the lineage,
OpenLineage integration processes dataflow graph. Currently, OpenLineage is interested only in information contained 
in `Sources` and `Sinks`, as they are the places where Flink interacts with external systems. 

After job submission, OpenLineage integration starts actively listening to checkpoints - this gives insight into 
whether the job runs properly.

## Limitations

Currently OpenLineage's Flink integration is limited to getting information from jobs running in Application Mode.

OpenLineage integration extracts lineage only from following `Sources` and `Sinks`:

<table>
  <tbody>
    <tr>
      <th>Sources</th>
      <th>Sinks</th>
    </tr>
    <tr>
      <td>KafkaSource</td>
      <td>KafkaSink</td>
    </tr>
    <tr>
      <td>FlinkKafkaConsumer</td>
      <td>FlinkKafkaProducer</td>
    </tr>
    <tr>
      <td>IcebergFlinkSource</td>
      <td>IcebergFlinkSink</td>
    </tr>
  </tbody>
</table>

We expect this list to grow as we add support for more connectors.

## Usage

In your job, you need to set up `OpenLineageFlinkJobListener`.

For example:
```java
    JobListener listener = JobListener listener = OpenLineageFlinkJobListener.builder()
        .executionEnvironment(streamExecutionEnvironment)
        .build();
    streamExecutionEnvironment.registerJobListener(listener);
```

Also, OpenLineage needs certain parameters to be set in `flink-conf.yaml`:

<table>
  <tbody>
<tr>
  <th>Configuration Key</th>
  <th>Description</th>
  <th>Expected Value</th>
  <th>Default</th>
</tr>
<tr>
  <td>execution.attached</td>
  <td>This setting needs to be true if OpenLineage is to detect job start and failure</td>
  <td>true</td>
  <td>false</td>
</tr>
  </tbody>
</table>

OpenLineage jar needs to be present on `JobManager`.

When the `JobListener` is configured, you need to point the OpenLineage integration where the events should end up. 
If you're using `Marquez`, simplest way to do that is to set up `OPENLINEAGE_URL` environment
variable to `Marquez` URL. More advanced settings are [in the client documentation.](../client/java.md).

## Configuring Openlineage connector

Flink Openlineage connector utilizes standard [Java client for Openlineage](https://github.com/OpenLineage/OpenLineage/tree/main/client/java)
and allows all the configuration features present there to be used. The configuration can be passed with:
 * `openlineage.yml` file with a environment property `OPENLINEAGE_CONFIG` being set and pointing to configuration file. File structure and allowed options are described [here](https://github.com/OpenLineage/OpenLineage/tree/main/client/java#configuration).
 * Standard Flink configuration with the parameters defined below.

### Flink Configuration parameters 

The following parameters can be specified:

| Parameter                                | Definition                                                                                                                                          | Example                           |
------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------
| openlineage.transport.type         | The transport type used for event emit, default type is `console`                                                                                   | http                              |
| openlineage.facets.disabled        | List of facets to disable, enclosed in `[]` (required from 0.21.x) and separated by `;` | \[some_facet1;some_facet1\] |


##### HTTP

| Parameter                                    | Definition                                                                                                                                  | Example               |
----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------
| openlineage.transport.endpoint          | Path to resource                                                                                                                            | /api/v1/lineage       |
| openlineage.transport.apiKey            | An API key to be used when sending events to the OpenLineage server                                                                         | abcdefghijk           |
| openlineage.transport.timeout           | Timeout for sending OpenLineage info in milliseconds                                                                                        | 5000                  |
| openlineage.transport.urlParams.xyz     | A URL parameter (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |
| openlineage.transport.url               | The hostname of the OpenLineage API server where events should be reported, it can have other properties embeded                            | http://localhost:5000 |
| openlineage.transport.headers.xyz       | Request headers (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |

###### URL

You can supply http parameters using values in url, the parsed `openlineage.*` properties are located in url as follows:

`{transport.url}/{transport.endpoint}/namespaces/{namespace}/jobs/{parentJobName}/runs/{parentRunId}?app_name={appName}&api_key={transport.apiKey}&timeout={transport.timeout}&xxx={transport.urlParams.xxx}`

example:

`http://localhost:5000/api/v1/namespaces/ns_name/jobs/job_name/runs/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx?app_name=app&api_key=abc&timeout=5000&xxx=xxx`

##### Kinesis
If `openlineage.transport.type` is set to `kinesis`, then the below parameters would be read and used when building KinesisProducer.
Also, KinesisTransport depends on you to provide artifact `com.amazonaws:amazon-kinesis-producer:0.14.0` or compatible on your classpath.

| Parameter                                     | Definition                                                                                                                                                                                   | Example          |
-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------
| openlineage.transport.streamName        | Required, the streamName of the Kinesis Stream                                                                                                                                               | some-stream-name |
| openlineage.transport.region            | Required, the region of the stream                                                                                                                                                           | us-east-2        |
| openlineage.transport.roleArn           | Optional, the roleArn which is allowed to read/write to Kinesis stream                                                                                                                       | some-role-arn    |
| openlineage.transport.properties.[xxx]  | Optional, the [xxx] is property of [Kinesis allowd properties](https://github.com/awslabs/amazon-kinesis-producer/blob/master/java/amazon-kinesis-producer-sample/default_config.properties) | 1                |

##### Kafka
If `openlineage.transport.type` is set to `kafka`, then the below parameters would be read and used when building KafkaProducer.

| Parameter                                    | Definition                                      | Example    |
----------------------------------------------|-------------------------------------------------|------------
| openlineage.transport.topicName        | Required, name of the topic                     | topic-name |
| openlineage.transport.localServerId    | Required, id of local server                    | xxxxxxxx   |
| openlineage.transport.properties.[xxx] | Optional, the [xxx] is property of Kafka client | 1          |

Please note that configuration parameters provided via standard Flink configuration are translated
to Openlineage Java client config entries and whenever new configuration feature is added 
to a Java client, it will be available for Flink users out of the box with no changes required.


