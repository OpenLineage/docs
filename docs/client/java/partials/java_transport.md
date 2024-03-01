import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Tip:** See current list of [all supported transports](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports).

### [HTTP](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/HttpTransport.java)

Allows sending events to HTTP endpoint (with optional authorization headers).

<Tabs groupId="spark">
<TabItem value="Yaml Config" label="Yaml Config">

```yaml
transport:
  type: http
  url: http://localhost:5000
```

With authorization:

```yaml
transport:
  type: http
  url: http://localhost:5000
  endpoint: api/v1/lineage
  auth:
    type: api_key
    api_key: f38d2189-c603-4b46-bdea-e573a3b5a7d5
```

<details><summary>Override the default configuration of the HttpTransport within Java client</summary>
<p>

#### Overriden default configuration of the `HttpTransport`

You can override the default configuration of the `HttpTransport` by specifying the URL and API key when
creating a new client:

```java
OpenLineageClient client = OpenLineageClient.builder()
  .transport(
    HttpTransport.builder()
      .url("http://localhost:5000")
      .apiKey("f38d2189-c603-4b46-bdea-e573a3b5a7d5")
      .build())
  .build();
```

To configure the client with query params appended on each HTTP request, use:

```java
Map<String, String> queryParamsToAppend = Map.of(
  "param0","value0",
  "param1", "value1"
);

// Connect to http://localhost:5000
OpenLineageClient client = OpenLineageClient.builder()
  .transport(
    HttpTransport.builder()
      .url("http://localhost:5000", queryParamsToAppend)
      .apiKey("f38d2189-c603-4b46-bdea-e573a3b5a7d5")
      .build())
  .build();

// Define a simple OpenLineage START or COMPLETE event
OpenLineage.RunEvent startOrCompleteRun = ...

// Emit OpenLineage event to http://localhost:5000/api/v1/lineage?param0=value0&param1=value1
client.emit(startOrCompleteRun);
```

</p>
</details>

</TabItem>
<TabItem value="Spark Config" label="Spark Config">

| Parameter                                   | Definition                                                                                                                                  | Example               |
---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------
| spark.openlineage.transport.endpoint        | Path to resource                                                                                                                            | /api/v1/lineage       |
| spark.openlineage.transport.auth.type       | The type of authentication method to use                                                                                                    | api_key               |
| spark.openlineage.transport.auth.apiKey     | An API key to be used when sending events to the OpenLineage server                                                                         | abcdefghijk           |
| spark.openlineage.transport.timeoutInMillis | Timeout for sending OpenLineage info in milliseconds                                                                                        | 5000                  |
| spark.openlineage.transport.urlParams.xyz   | A URL parameter (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |
| spark.openlineage.transport.url             | The hostname of the OpenLineage API server where events should be reported, it can have other properties embeded                            | http://localhost:5000 |
| spark.openlineage.transport.headers.xyz     | Request headers (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |

<details><summary>URL parsing within Spark integration</summary>
<p>

#### URL parsing within Spark integration

You can supply http parameters using values in url, the parsed `spark.openlineage.*` properties are located in url as follows:

`{transport.url}/{transport.endpoint}/namespaces/{namespace}/jobs/{parentJobName}/runs/{parentRunId}?app_name={appName}&api_key={transport.apiKey}&timeout={transport.timeout}&xxx={transport.urlParams.xxx}`

example:

`http://localhost:5000/api/v1/namespaces/ns_name/jobs/job_name/runs/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx?app_name=app&api_key=abc&timeout=5000&xxx=xxx`

</p>
</details>
</TabItem>
<TabItem value="Flink Config" label="Flink Config">

| Parameter                                    | Definition                                                                                                                                  | Example               |
----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------
| openlineage.transport.endpoint          | Path to resource                                                                                                                            | /api/v1/lineage       |
| openlineage.transport.auth.type         | The type of authentication method to use                                                                                                    | api_key               |
| openlineage.transport.auth.apiKey       | An API key to be used when sending events to the OpenLineage server                                                                         | abcdefghijk           |
| openlineage.transport.timeout           | Timeout for sending OpenLineage info in milliseconds                                                                                        | 5000                  |
| openlineage.transport.urlParams.xyz     | A URL parameter (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |
| openlineage.transport.url               | The hostname of the OpenLineage API server where events should be reported, it can have other properties embeded                            | http://localhost:5000 |
| openlineage.transport.headers.xyz       | Request headers (replace xyz) and value to be included in requests to the OpenLineage API server                                            | abcdefghijk           |

</TabItem>
</Tabs>

### [Kafka](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/KafkaTransport.java)
If a transport type is set to `kafka`, then the below parameters would be read and used when building KafkaProducer.
This transport requires the artifact `org.apache.kafka:kafka-clients:3.1.0` (or compatible) on your classpath.


<Tabs groupId="integrations">
<TabItem value="yaml" label="Yaml Config">

```yaml
transport:
  type: kafka
  topicName: openlineage.events
  # Kafka properties (see: http://kafka.apache.org/0100/documentation.html#producerconfigs)
  properties:
    bootstrap.servers: localhost:9092,another.host:9092
    acks: all
    retries: 3
    key.serializer: org.apache.kafka.common.serialization.StringSerializer
    value.serializer: org.apache.kafka.common.serialization.StringSerializer
```

</TabItem>
<TabItem value="spark" label="Spark Config">

| Parameter                                    | Definition                                      | Example    |
----------------------------------------------|-------------------------------------------------|------------
| spark.openlineage.transport.topicName        | Required, name of the topic                     | topic-name |
| spark.openlineage.transport.localServerId    | Required, id of local server                    | xxxxxxxx   |
| spark.openlineage.transport.properties.[xxx] | Optional, the [xxx] is property of Kafka client | 1          |
</TabItem>
<TabItem value="flink" label="Flink Config">

| Parameter                                    | Definition                                      | Example    |
----------------------------------------------|-------------------------------------------------|------------
| openlineage.transport.topicName        | Required, name of the topic                     | topic-name |
| openlineage.transport.localServerId    | Required, id of local server                    | xxxxxxxx   |
| openlineage.transport.properties.[xxx] | Optional, the [xxx] is property of Kafka client | 1          |
</TabItem>
</Tabs>

### [Kinesis](https://github.com/OpenLineage/OpenLineage/blob/main/client/java/src/main/java/io/openlineage/client/transports/KinesisTransport.java)
If a transport type is set to `kinesis`, then the below parameters would be read and used when building KinesisProducer.
Also, KinesisTransport depends on you to provide artifact `com.amazonaws:amazon-kinesis-producer:0.14.0` or compatible on your classpath.

<Tabs groupId="integrations">
<TabItem value="yaml" label="Yaml Config">

```yaml
transport:
  type: kinesis
  streamName: your_kinesis_stream_name
  topicName: openlineage.events
  region: your_aws_region
  roleArn: arn:aws:iam::account-id:role/role-name   # optional
  properties:  # Refer to amazon-kinesis-producer's default configuration.md for the available properties
    property_name_1: value_1
    property_name_2: value_2
```

</TabItem>
<TabItem value="spark" label="Spark Config">

| Parameter                                     | Definition                                                                                                                                                                                   | Example          |
-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------
| spark.openlineage.transport.streamName        | Required, the streamName of the Kinesis Stream                                                                                                                                               | some-stream-name |
| spark.openlineage.transport.region            | Required, the region of the stream                                                                                                                                                           | us-east-2        |
| spark.openlineage.transport.roleArn           | Optional, the roleArn which is allowed to read/write to Kinesis stream                                                                                                                       | some-role-arn    |
| spark.openlineage.transport.properties.[xxx]  | Optional, the [xxx] is property of [Kinesis allowd properties](https://github.com/awslabs/amazon-kinesis-producer/blob/master/java/amazon-kinesis-producer-sample/default_config.properties) | 1                |

</TabItem>
<TabItem value="flink" label="Flink Config">

| Parameter                                     | Definition                                                                                                                                                                                   | Example          |
-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------
| openlineage.transport.streamName        | Required, the streamName of the Kinesis Stream                                                                                                                                               | some-stream-name |
| openlineage.transport.region            | Required, the region of the stream                                                                                                                                                           | us-east-2        |
| openlineage.transport.roleArn           | Optional, the roleArn which is allowed to read/write to Kinesis stream                                                                                                                       | some-role-arn    |
| openlineage.transport.properties.[xxx]  | Optional, the [xxx] is property of [Kinesis allowd properties](https://github.com/awslabs/amazon-kinesis-producer/blob/master/java/amazon-kinesis-producer-sample/default_config.properties) | 1                |


</TabItem>
</Tabs>

*Behavior*:
- Events are serialized to JSON upon the `emit()` call and dispatched to the Kinesis stream.
- The partition key is generated by combining the job's namespace and name.
- Two constructors are available: one accepting both `KinesisProducer` and `KinesisConfig` and another solely accepting `KinesisConfig`.


### [Console](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/ConsoleTransport.java)

This straightforward transport emits OpenLineage events directly to the console through a logger.
Be cautious when using the DEBUG log level, as it might result in double-logging due to the `OpenLineageClient` also logging.
No additional configuration is required.

<Tabs groupId="integrations">
<TabItem value="yaml" label="Yaml Config">

```yaml
transport:
  type: console
```
</TabItem>
<TabItem value="spark" label="Spark Config">


</TabItem>
<TabItem value="flink" label="Flink Config">


</TabItem>
</Tabs>

### [File](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/FileTransport.java)

Designed mainly for integration testing, the `FileTransport` appends OpenLineage events to a given file.
Events are newline-separated, with all pre-existing newline characters within the event JSON removed.

<Tabs groupId="integrations">
<TabItem value="yaml" label="Yaml Config">

```yaml
transport:
  type: file
  location: /path/to/your/file.txt
```
</TabItem>
<TabItem value="spark" label="Spark Config">

| Parameter                            | Definition | Example          |
--------------------------------------|------------|------------------
| spark.openlineage.transport.location | File path  | /path/to/your/file.txt |

</TabItem>
<TabItem value="flink" label="Flink Config">

| Parameter                                     | Definition | Example          |
-----------------------------------------------|------------|------------------
| openlineage.transport.location        | File path  | /path/to/your/file.txt |

</TabItem>
</Tabs>

*Notes*:
- If the target file is absent, it's created.
- Events are added to the file, separated by newlines.
- Intrinsic newline characters within the event JSON are eliminated to ensure one-line events.
