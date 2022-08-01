---
sidebar_position: 2
---

# Quickstart with Databricks

Open Lineage's can be installed on Databricks leveraging init scripts. Please note, Databricks on Google Cloud does not currently support the DBFS CLI so the proposed solution will not work for Google Cloud until that feature is enabled. 

* [Azure Databricks Init Scripts](https://docs.microsoft.com/en-us/azure/databricks/clusters/init-scripts)
* [GCP Databricks Init Scripts](https://docs.gcp.databricks.com/clusters/init-scripts.html)
* [AWS Databricks Init Scripts](https://docs.databricks.com/clusters/init-scripts.html)

Follow the steps below to enable Open Lineage on Databricks.

* Build the jar via Gradle - or download the [latest release](https://search.maven.org/remote_content?g=io.openlineage&a=openlineage-spark&v=LATEST)
* Configure the Databricks CLI with your desired workspace:
    * [Azure Databricks CLI](https://docs.microsoft.com/en-us/azure/databricks/dev-tools/cli/)
    * [GCP Databricks CLI](https://docs.gcp.databricks.com/dev-tools/cli/index.html)
    * [AWS Databricks CLI](https://docs.databricks.com/dev-tools/cli/index.html)
* Run `upload-to-databricks.sh` or `upload-to-databricks.ps1`
    * This creates a folder in dbfs to store the open lineage jar.
    * Copies the jar to the dbfs folder
    * Copies the init script to the dbfs folder
* Create an interactive or job cluster with the relevant spark configs:
    ```
    spark.openlineage.consoleTransport true
    spark.extraListeners io.openlineage.spark.agent.OpenLineageSparkListener
    spark.openlineage.version v1
    ```
* Set the cluster Init script to be: `dbfs:/databricks/openlineage/open-lineage-init-script.sh`

:::info
Please note that init script approach is obligatory to install OpenLineage on Databricks. Openlineage integration relies on providing a custom extra listener class `io.openlineage.spark.agent.OpenLineageSparkListener` which has to be available on the classpath at the driver startup. Providing it with `spark.jars.packages` does not work on Databricks platform (August 2022).  
:::

Open a notebook and create an example dataset with
```python
spark.createDataFrame([
    {'a': 1, 'b': 2},
    {'a': 3, 'b': 4}
]).write.mode("overwrite").saveAsTable("default.temp")
```

We can now navigate to `Driver Logs` section within cluster definition.
The `Log4j output` should contain entries starting with a message `INFO ConsoleTransport` which contain generated OpenLineage events

```
{"eventType":"COMPLETE","eventTime":"2022-08-01T08:36:21.633Z","run":{"runId":"64537bbd-00ac-498d-ad49-1c77e9c2aabd","facets":{"spark_unknown":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","inputs":[{"description":{"@class":"org.apache.spark.sql.catalyst.analysis.ResolvedTableName","id":1,"traceEnabled":false,"streaming":false,"cacheId":{"id":2,"empty":true,"defined":false},"canonicalizedPlan":false,"defaultTreePatternBits":{"id":3}},"inputAttributes":[],"outputAttributes":[]},{"description":{"@class":"org.apache.spark.sql.execution.LogicalRDD","id":1,"streaming":false,"traceEnabled":false,"cacheId":{"id":2,"empty":true,"defined":false},"canonicalizedPlan":false,"defaultTreePatternBits":{"id":3}},"inputAttributes":[],"outputAttributes":[{"name":"a","type":"long","metadata":{}},{"name":"b","type":"long","metadata":{}}]}]},"spark.logicalPlan":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","plan":[{"class":"org.apache.spark.sql.catalyst.plans.logical.ReplaceTableAsSelect","num-children":2,"name":0,"partitioning":[],"query":1,"tableSpec":null,"writeOptions":null,"orCreate":true},{"class":"org.apache.spark.sql.catalyst.analysis.ResolvedTableName","num-children":0,"catalog":null,"ident":null},{"class":"org.apache.spark.sql.execution.LogicalRDD","num-children":0,"output":[[{"class":"org.apache.spark.sql.catalyst.expressions.AttributeReference","num-children":0,"name":"a","dataType":"long","nullable":true,"metadata":{},"exprId":{"product-class":"org.apache.spark.sql.catalyst.expressions.ExprId","id":18,"jvmId":"481bebf6-f861-400e-bb00-ea105ed8afef"},"qualifier":[]}],[{"class":"org.apache.spark.sql.catalyst.expressions.AttributeReference","num-children":0,"name":"b","dataType":"long","nullable":true,"metadata":{},"exprId":{"product-class":"org.apache.spark.sql.catalyst.expressions.ExprId","id":19,"jvmId":"481bebf6-f861-400e-bb00-ea105ed8afef"},"qualifier":[]}]],"rdd":null,"outputPartitioning":{"product-class":"org.apache.spark.sql.catalyst.plans.physical.UnknownPartitioning","numPartitions":0},"outputOrdering":[],"isStreaming":false,"session":null}]},"spark_version":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunFacet","spark-version":"3.2.1","openlineage-spark-version":"0.12.0-SNAPSHOT"}}},"job":{"namespace":"default","name":"databricks_shell.atomic_replace_table_as_select","facets":{}},"inputs":[],"outputs":[{"namespace":"dbfs","name":"/user/hive/warehouse/temp","facets":{"dataSource":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/DatasourceDatasetFacet.json#/$defs/DatasourceDatasetFacet","name":"dbfs","uri":"dbfs"},"schema":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/SchemaDatasetFacet.json#/$defs/SchemaDatasetFacet","fields":[{"name":"a","type":"long"},{"name":"b","type":"long"}]},"storage":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/StorageDatasetFacet.json#/$defs/StorageDatasetFacet","storageLayer":"delta","fileFormat":"parquet"},"lifecycleStateChange":{"_producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","_schemaURL":"https://openlineage.io/spec/facets/1-0-0/LifecycleStateChangeDatasetFacet.json#/$defs/LifecycleStateChangeDatasetFacet","lifecycleStateChange":"OVERWRITE"}},"outputFacets":{}}],"producer":"https://github.com/OpenLineage/OpenLineage/tree/0.12.0-SNAPSHOT/integration/spark","schemaURL":"https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/RunEvent"}
```

Generated JSON contains output dataset name and location `{"namespace":"dbfs","name":"/user/hive/warehouse/temp""`, schema fields `[{"name":"a","type":"long"},{"name":"b","type":"long"}]`, etc. 

To get more information on OpenLineage in Databricks, please read [here](https://github.com/OpenLineage/OpenLineage/tree/main/integration/spark/databricks).