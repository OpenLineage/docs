---
sidebar_position: 5
---

# Java

## Overview

The OpenLineage Java is a SDK for Java programming language that users can use to generate and emit OpenLineage events to OpenLineage backends.
The core data structures currently offered by the client are the `RunEvent`, `RunState`, `Run`, `Job`, `Dataset`, 
and `Transport` classes, along with various `Facets` that can come under run, job, and dataset.

There are various [transport classes](#transports) that the library provides that carry the lineage events into various target endpoints (e.g. HTTP).

You can also use the Java client to create your own custom integrations.

## Installation

Java client is provided as library that can either be imported into your Java project using Maven or Gradle.

Maven:

```xml
<dependency>
    <groupId>io.openlineage</groupId>
    <artifactId>openlineage-java</artifactId>
    <version>1.8.0</version>
</dependency>
```

or Gradle:

```groovy
implementation 'io.openlineage:openlineage-java:1.8.0'
```

For more information on the available versions of the `openlineage-java`, 
please refer to the [maven repository](https://search.maven.org/artifact/io.openlineage/openlineage-java).

## Configuration

We recommend configuring the client with an `openlineage.yml` file that contains all the
details of how to connect to your OpenLineage backend.  

See [example configurations.](#transports)

You can make this file available to the client in three ways (the list also presents precedence of the configuration):

1. Set an `OPENLINEAGE_CONFIG` environment variable to a file path: `OPENLINEAGE_CONFIG=path/to/openlineage.yml`.
2. Place an `openlineage.yml` in the user's current working directory.
3. Place an `openlineage.yml` under `.openlineage/` in the user's home directory (`~/.openlineage/openlineage.yml`).


### Environment Variables
The following environment variables are available:

| Name                 | Description                                                                 | Since |
|----------------------|-----------------------------------------------------------------------------|-------|
| OPENLINEAGE_CONFIG   | The path to the YAML configuration file. Example: `path/to/openlineage.yml` |       |
| OPENLINEAGE_DISABLED | When `true`, OpenLineage will not emit events.                              | 0.9.0 |


### Facets Configuration

In YAML configuration file you can also specify a list of disabled facets that will not be included in OpenLineage event. 

*YAML Configuration*
```yaml
transport:
  type: console
facets:
  disabled: 
    - spark_unknown
    - spark_logicalPlan
```

### Transports
> **Tip:** See current list of [all supported transports](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports).

<br />

The `Transport` abstraction defines an `emit()` method for `OpenLineage.RunEvent`. 
There are some built-in transports: `ConsoleTransport`, `HttpTransport`, `FileTransport`, `KinesisTransport` and `KafkaTransport`.

#### [ConsoleTransport](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/ConsoleTransport.java) 

This straightforward transport emits OpenLineage events directly to the console through a logger. 
Be cautious when using the DEBUG log level, as it might result in double-logging due to the `OpenLineageClient` also logging.

*YAML Configuration*
```yaml
transport:
  type: console
```
*No additional configuration required.*

You can also specify the ConsoleTransport when building a new client instance.

```java
OpenLineageClient client = OpenLineageClient.builder()
  .transport(
    new ConsoleTransport()
  .build();
```

#### [FileTransport](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/FileTransport.java)

Designed mainly for integration testing, the `FileTransport` appends OpenLineage events to a given file. 
Events are newline-separated, with all pre-existing newline characters within the event JSON removed.

*YAML Configuration*
```yaml
transport:
  type: file
  location: /path/to/your/file.txt
```

*Notes*:
- If the target file is absent, it's created.
- Events are added to the file, separated by newlines.
- Intrinsic newline characters within the event JSON are eliminated to ensure one-line events.


#### [HttpTransport](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/HttpTransport.java)
Allows sending events to HTTP endpoint (with optional authorization headers).

*YAML Configuration*
```yaml
transport:
  type: http
  url: http://localhost:5000
```

*YAML Configuration* (with authorization)
```yaml
transport:
  type: http
  url: http://localhost:5000
  endpoint: api/v1/lineage
  auth:
    type: api_key
    api_key: f38d2189-c603-4b46-bdea-e573a3b5a7d5
```

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

#### [KafkaTransport](https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/main/java/io/openlineage/client/transports/KafkaTransport.java)

This transport requires the artifact `org.apache.kafka:kafka-clients:3.1.0` (or compatible) on your classpath.

*YAML Configuration*
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


#### [KinesisTransport](https://github.com/OpenLineage/OpenLineage/blob/main/client/java/src/main/java/io/openlineage/client/transports/KinesisTransport.java)

The `KinesisTransport` facilitates sending OpenLineage events to an Amazon Kinesis stream.
If `transport.type` is set to `kinesis`, then the below parameters would be read and used when building KinesisProducer.
Also, KinesisTransport depends on you to provide artifact `com.amazonaws:amazon-kinesis-producer:0.14.0` or compatible on your classpath.

*YAML Configuration*
```yaml
transport:
  type: kinesis
  streamName: your_kinesis_stream_name
  topicName: openlineage.events
  region: your_aws_region
  roleArn: arn:aws:iam::account-id:role/role-name   # optional
  properties:  # Refer to amazon-kinesis-producer's default configuration for the available properties
    property_name_1: value_1
    property_name_2: value_2
```

*Behavior*:
- Events are serialized to JSON upon the `emit()` call and dispatched to the Kinesis stream.
- The partition key is generated by combining the job's namespace and name.
- Two constructors are available: one accepting both `KinesisProducer` and `KinesisConfig` and another solely accepting `KinesisConfig`.


### Error Handling via Transport

```java
// Connect to http://localhost:5000
OpenLineageClient client = OpenLineageClient.builder()
  .transport(
    HttpTransport.builder()
      .uri("http://localhost:5000")
      .apiKey("f38d2189-c603-4b46-bdea-e573a3b5a7d5")
      .build())
  .registerErrorHandler(new EmitErrorHandler() {
    @Override
    public void handleError(Throwable throwable) {
      // Handle emit error here
    }
  }).build();
```

### Defining Your Own Transport

```java
OpenLineageClient client = OpenLineageClient.builder()
  .transport(
    new MyTransport() {
      @Override
      public void emit(OpenLineage.RunEvent runEvent) {
        // Add emit logic here
      }
    }).build();
```

## Circuit Breakers 

To prevent from over-instrumentation OpenLineage integration provides a circuit breaker mechanism
that stops OpenLineage from creating, serializing and sending OpenLineage events. 

### Simple Memory Circuit Breaker

Simple circuit breaker which is working based only on free memory within JVM. Configuration should
contain free memory threshold limit (percentage). Default value is `20%`. The circuit breaker 
will close within first call if free memory is low. `circuitCheckIntervalInMillis` parameter is used
to configure a frequency circuit breaker is called. Default value is `1000ms`, when no entry in config.

Example usage:

```yaml
circuitBreaker:
  type: simpleMemory
  memoryThreshold: 20
  circuitCheckIntervalInMillis: 1000
```

### Java Runtime Circuit Breaker

More complex version of circuit breaker. The amount of free memory can be low as long as 
amount of time spent on Garbage Collection is acceptable. `JavaRuntimeCircuitBreaker` closes
when free memory drops below threshold and amount of time spent on garbage collection exceeds
given threshold (`10%` by default). The circuit breaker is always open when checked for the first time
as GC threshold is computed since the previous circuit breaker call. 
`circuitCheckIntervalInMillis` parameter is used
to configure a frequency circuit breaker is called. 
Default value is `1000ms`, when no entry in config.

```yaml
circuitBreaker:
  type: javaRuntime
  memoryThreshold: 20
  gcCpuThreshold: 10
  circuitCheckIntervalInMillis: 1000
```

### Custom Circuit Breaker

List of available circuit breakers can be extended with custom one loaded via ServiceLoader
with own implementation of `io.openlineage.client.circuitBreaker.CircuitBreakerBuilder`. 


## Usage

```java
// Use openlineage.yml
OpenLineageClient client = Clients.newClient();

// Define a simple OpenLineage START or COMPLETE event
OpenLineage.RunEvent startOrCompleteRun = ...

// Emit OpenLineage event
client.emit(startOrCompleteRun);
```

### 1. Simple OpenLineage Client Test for Console Transport
First, let's explore how we can create OpenLineage client instance, but not using any actual transport to emit the data yet, except only to our `Console.` This would be a good exercise to run tests and check the data payloads.

```java
    OpenLineageClient client = OpenLineageClient.builder()
        .transport(new ConsoleTransport()).build();
```

Also, we will then get a sample payload to produce a `RunEvent`:

```java
    // create one start event for testing
    RunEvent event = buildEvent(EventType.START);
```

Lastly, we will emit this event using the client that we instantiated\:

```java
    // emit the event
    client.emit(event);
```

Here is the full source code of the test client application:

```java
package ol.test;

import io.openlineage.client.OpenLineage;
import io.openlineage.client.OpenLineageClient;
import io.openlineage.client.OpenLineage.RunEvent;
import io.openlineage.client.OpenLineage.InputDataset;
import io.openlineage.client.OpenLineage.Job;
import io.openlineage.client.OpenLineage.JobFacets;
import io.openlineage.client.OpenLineage.OutputDataset;
import io.openlineage.client.OpenLineage.Run;
import io.openlineage.client.OpenLineage.RunFacets;
import io.openlineage.client.OpenLineage.RunEvent.EventType;
import io.openlineage.client.transports.ConsoleTransport;
import java.net.URI;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

/**
 * My first openlinage client code
 */
public class OpenLineageClientTest
{
    public static void main( String[] args )
    {
        try {
            OpenLineageClient client = OpenLineageClient.builder()
            .transport(new ConsoleTransport()).build();

            // create one start event for testing
            RunEvent event = buildEvent(EventType.START);

            // emit the event
            client.emit(event);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    // sample code to build event
    public static RunEvent buildEvent(EventType eventType) {
        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("UTC"));
        URI producer = URI.create("producer");
        OpenLineage ol = new OpenLineage(producer);
        UUID runId = UUID.randomUUID();

        // run facets
        RunFacets runFacets =
        ol.newRunFacetsBuilder()
            .nominalTime(
                ol.newNominalTimeRunFacetBuilder()
                    .nominalStartTime(now)
                    .nominalEndTime(now)
                    .build())
            .build();

        // a run is composed of run id, and run facets
        Run run = ol.newRunBuilder().runId(runId).facets(runFacets).build();

        // job facets
        JobFacets jobFacets = ol.newJobFacetsBuilder().build();

        // job
        String name = "jobName";
        String namespace = "namespace";
        Job job = ol.newJobBuilder().namespace(namespace).name(name).facets(jobFacets).build();

        // input dataset
        List<InputDataset> inputs =
        Arrays.asList(
            ol.newInputDatasetBuilder()
                .namespace("ins")
                .name("input")
                .facets(
                    ol.newDatasetFacetsBuilder()
                        .version(ol.newDatasetVersionDatasetFacet("input-version"))
                        .build())
                .inputFacets(
                    ol.newInputDatasetInputFacetsBuilder()
                        .dataQualityMetrics(
                            ol.newDataQualityMetricsInputDatasetFacetBuilder()
                                .rowCount(10L)
                                .bytes(20L)
                                .columnMetrics(
                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsBuilder()
                                        .put(
                                            "mycol",
                                            ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalBuilder()
                                                .count(10D)
                                                .distinctCount(10L)
                                                .max(30D)
                                                .min(5D)
                                                .nullCount(1L)
                                                .sum(3000D)
                                                .quantiles(
                                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalQuantilesBuilder()
                                                        .put("25", 52D)
                                                        .build())
                                                .build())
                                        .build())
                                .build())
                        .build())
                .build());
        // output dataset
        List<OutputDataset> outputs =
            Arrays.asList(
                ol.newOutputDatasetBuilder()
                    .namespace("ons")
                    .name("output")
                    .facets(
                        ol.newDatasetFacetsBuilder()
                            .version(ol.newDatasetVersionDatasetFacet("output-version"))
                            .build())
                    .outputFacets(
                        ol.newOutputDatasetOutputFacetsBuilder()
                            .outputStatistics(ol.newOutputStatisticsOutputDatasetFacet(10L, 20L))
                            .build())
                    .build());

        // run state udpate which encapsulates all - with START event in this case
        RunEvent runStateUpdate =
        ol.newRunEventBuilder()
            .eventType(OpenLineage.RunEvent.EventType.START)
            .eventTime(now)
            .run(run)
            .job(job)
            .inputs(inputs)
            .outputs(outputs)
            .build();

        return runStateUpdate;
    }
}
```

The result of running this will result in the following output from your Java application:

```
[main] INFO io.openlineage.client.transports.ConsoleTransport - {"eventType":"START","eventTime":"2022-08-05T15:11:24.858414Z","run":{"runId":"bb46bbc4-fb1a-495a-ad3b-8d837f566749","facets":{"nominalTime":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/NominalTimeRunFacet.json#/$defs/NominalTimeRunFacet","nominalStartTime":"2022-08-05T15:11:24.858414Z","nominalEndTime":"2022-08-05T15:11:24.858414Z"}}},"job":{"namespace":"namespace","name":"jobName","facets":{}},"inputs":[{"namespace":"ins","name":"input","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"input-version"}},"inputFacets":{"dataQualityMetrics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DataQualityMetricsInputDatasetFacet.json#/$defs/DataQualityMetricsInputDatasetFacet","rowCount":10,"bytes":20,"columnMetrics":{"mycol":{"nullCount":1,"distinctCount":10,"sum":3000.0,"count":10.0,"min":5.0,"max":30.0,"quantiles":{"25":52.0}}}}}}],"outputs":[{"namespace":"ons","name":"output","facets":{"version":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasetVersionDatasetFacet.json#/$defs/DatasetVersionDatasetFacet","datasetVersion":"output-version"}},"outputFacets":{"outputStatistics":{"_producer":"producer","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json#/$defs/OutputStatisticsOutputDatasetFacet","rowCount":10,"size":20}}}],"producer":"producer","schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunEvent"}
```

### 2. Simple OpenLineage Client Test for Http Transport

Now, using the same code base, we will change how the client application works by switching the Console transport into `Http Transport` as shown below. This code will now be able to send the OpenLineage events into a compatible backends such as [Marquez](https://marquezproject.ai/). 

Before making this change and running it, make sure you have an instance of Marquez running on your local environment. Setting up and running Marquez can be found [here](https://marquezproject.github.io/marquez/quickstart.html).

```java
OpenLineageClient client = OpenLineageClient.builder()
    .transport(
        HttpTransport.builder()
        .uri("http://localhost:5000")
        .build())
    .build();
```
If we ran the same application, you will now see the event data not emitted in the output console, but rather via the HTTP transport to the marquez backend that was running.

![the Marquez graph](./mqz_job_running.png)

Notice that the Status of this job run will be in `RUNNING` state, as it will be in that state until it receives an `end` event that will close off its gaps. That is how the OpenLineage events would work.

Now, let's change the previous example to have lineage event doing a complete cycle of `START` -> `COMPLETE`:

```java
package ol.test;

import io.openlineage.client.OpenLineage;
import io.openlineage.client.OpenLineageClient;
import io.openlineage.client.OpenLineage.RunEvent;
import io.openlineage.client.OpenLineage.InputDataset;
import io.openlineage.client.OpenLineage.Job;
import io.openlineage.client.OpenLineage.JobFacets;
import io.openlineage.client.OpenLineage.OutputDataset;
import io.openlineage.client.OpenLineage.Run;
import io.openlineage.client.OpenLineage.RunFacets;
import io.openlineage.client.OpenLineage.RunEvent.EventType;
import io.openlineage.client.transports.HttpTransport;

import java.net.URI;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

/**
 * My first openlinage client code
 */
public class OpenLineageClientTest
{
    public static void main( String[] args )
    {
        try {

            OpenLineageClient client = OpenLineageClient.builder()
                .transport(
                    HttpTransport.builder()
                    .uri("http://localhost:5000")
                    .build())
                .build();

            // create one start event for testing
            RunEvent event = buildEvent(EventType.START, null);

            // emit the event
            client.emit(event);

            // another event to COMPLETE the run
            event = buildEvent(EventType.COMPLETE, event.getRun().getRunId());

            // emit the second COMPLETE event
            client.emit(event);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // sample code to build event
    public static RunEvent buildEvent(EventType eventType, UUID runId) {
        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("UTC"));
        URI producer = URI.create("producer");
        OpenLineage ol = new OpenLineage(producer);

        if (runId == null) {
            runId = UUID.randomUUID();
        }

        // run facets
        RunFacets runFacets =
        ol.newRunFacetsBuilder()
            .nominalTime(
                ol.newNominalTimeRunFacetBuilder()
                    .nominalStartTime(now)
                    .nominalEndTime(now)
                    .build())
            .build();

        // a run is composed of run id, and run facets
        Run run = ol.newRunBuilder().runId(runId).facets(runFacets).build();

        // job facets
        JobFacets jobFacets = ol.newJobFacetsBuilder().build();

        // job
        String name = "jobName";
        String namespace = "namespace";
        Job job = ol.newJobBuilder().namespace(namespace).name(name).facets(jobFacets).build();

        // input dataset
        List<InputDataset> inputs =
        Arrays.asList(
            ol.newInputDatasetBuilder()
                .namespace("ins")
                .name("input")
                .facets(
                    ol.newDatasetFacetsBuilder()
                        .version(ol.newDatasetVersionDatasetFacet("input-version"))
                        .build())
                .inputFacets(
                    ol.newInputDatasetInputFacetsBuilder()
                        .dataQualityMetrics(
                            ol.newDataQualityMetricsInputDatasetFacetBuilder()
                                .rowCount(10L)
                                .bytes(20L)
                                .columnMetrics(
                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsBuilder()
                                        .put(
                                            "mycol",
                                            ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalBuilder()
                                                .count(10D)
                                                .distinctCount(10L)
                                                .max(30D)
                                                .min(5D)
                                                .nullCount(1L)
                                                .sum(3000D)
                                                .quantiles(
                                                    ol.newDataQualityMetricsInputDatasetFacetColumnMetricsAdditionalQuantilesBuilder()
                                                        .put("25", 52D)
                                                        .build())
                                                .build())
                                        .build())
                                .build())
                        .build())
                .build());
        // output dataset
        List<OutputDataset> outputs =
            Arrays.asList(
                ol.newOutputDatasetBuilder()
                    .namespace("ons")
                    .name("output")
                    .facets(
                        ol.newDatasetFacetsBuilder()
                            .version(ol.newDatasetVersionDatasetFacet("output-version"))
                            .build())
                    .outputFacets(
                        ol.newOutputDatasetOutputFacetsBuilder()
                            .outputStatistics(ol.newOutputStatisticsOutputDatasetFacet(10L, 20L))
                            .build())
                    .build());

        // run state udpate which encapsulates all - with START event in this case
        RunEvent runStateUpdate =
        ol.newRunEventBuilder()
            .eventType(eventType)
            .eventTime(now)
            .run(run)
            .job(job)
            .inputs(inputs)
            .outputs(outputs)
            .build();

        return runStateUpdate;
    }
}
```
Now, when you run this application, the Marquez would have an output that would looke like this:

![the Marquez graph](./mqz_job_complete.png)

