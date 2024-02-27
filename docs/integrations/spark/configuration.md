---
sidebar_position: 2
title: Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Configuring the OpenLineage Spark integration is straightforward. It uses built-in Spark configuration mechanisms.

Your options are:

1. [Setting the properties directly in your application](#setting-the-properties-directly-in-your-application).
2. [Using `--conf` options with the CLI](#using---conf-options-with-the-cli).
3. [Adding properties to the `spark-defaults.conf` file in the `${SPARK_HOME}/conf` directory](#adding-properties-to-the-spark-defaultsconf-file-in-the-spark_homeconf-directory).

#### Setting the properties directly in your application

The below example demonstrates how to set the properties directly in your application when
constructing
a `SparkSession`.

:::warning
The setting `config("spark.extraListeners", "io.openlineage.spark.agent.OpenLineageSparkListener")` is
**extremely important**. Without it, the OpenLineage Spark integration will not be invoked, rendering
the integration ineffective.
:::

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

#### Adding properties to the `spark-defaults.conf` file in the `${SPARK_HOME}/conf` directory

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

## Transports

import Transports from '../../client/java/partials/java_transport.md';

<Transports/>

## Circuit Breakers

import CircuitBreakers from '../../client/java/partials/java_circuit_breaker.md';

<CircuitBreakers/>
