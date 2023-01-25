# OpenLineage in Databricks

OpenLineage's [Spark Integration](https://github.com/OpenLineage/OpenLineage/blob/a2d39a7a6f02474b2dfd1484f3a6d2810a5ffe30/integration/spark/README.md) can be installed on Databricks by leveraging init scripts. Please note, Databricks on Google Cloud does not currently support the DBFS CLI, so the proposed solution will not work for Google Cloud until that feature is enabled. 

* [Azure Databricks Init Scripts](https://docs.microsoft.com/en-us/azure/databricks/clusters/init-scripts)
* [GCP Databricks Init Scripts](https://docs.gcp.databricks.com/clusters/init-scripts.html)
* [AWS Databricks Init Scripts](https://docs.databricks.com/clusters/init-scripts.html)

## Databricks Installation Instructions

Follow the steps below to enable OpenLineage on Databricks.

* Build the jar via Gradle or download the [latest release](https://search.maven.org/remote_content?g=io.openlineage&a=openlineage-spark&v=LATEST).
* Configure the Databricks CLI with your desired workspace:
    * [Azure Databricks CLI](https://docs.microsoft.com/en-us/azure/databricks/dev-tools/cli/)
    * [GCP Databricks CLI](https://docs.gcp.databricks.com/dev-tools/cli/index.html)
    * [AWS Databricks CLI](https://docs.databricks.com/dev-tools/cli/index.html)
* Run [`upload-to-databricks.sh`](https://github.com/OpenLineage/OpenLineage/blob/main/integration/spark/databricks/upload-to-databricks.sh) or [`upload-to-databricks.ps1`](https://github.com/OpenLineage/OpenLineage/blob/main/integration/spark/databricks/upload-to-databricks.ps1).
    * This creates a folder in DBFS to store the openlineage jar.
    * Copies the jar to the DBFS folder
    * Copies the [`init` script](https://github.com/OpenLineage/OpenLineage/blob/main/integration/spark/databricks/open-lineage-init-script.sh) to the DBFS folder
* Create an interactive or job cluster with the relevant Spark configs:
    ```
    spark.openlineage.endpoint api/v1/lineage
    spark.openlineage.namespace YOURNAMESPACE
    spark.openlineage.url https://YOURHOST
    ```
* Set the cluster `init` script to be: `dbfs:/databricks/openlineage/open-lineage-init-script.sh`.

## Observe Logs in Driver Logs

To troubleshoot or observe the OpenLineage information in Databricks, see the `Log4j output` in the Cluster's Driver Logs.

### Initialization Logs

A successful initialization will emit logs in the Log4j output that look similar to the following:

```
YY/MM/DD HH:mm:ss INFO SparkContext: Registered listener io.openlineage.spark.agent.OpenLineageSparkListener

YY/MM/DD HH:mm:ss INFO OpenLineageContext: Init OpenLineageContext: Args: ArgumentParser(host=https://YOURHOST, version=v1, namespace=YOURNAMESPACE, jobName=default, parentRunId=null, apiKey=Optional.empty) URI: https://YOURHOST/api/v1/lineage

YY/MM/DD HH:mm:ss INFO AsyncEventQueue: Process of event SparkListenerApplicationStart(Databricks Shell,Some(app-XXX-0000),YYYY,root,None,None,None) by listener OpenLineageSparkListener took Xs.
```

### For Every Lineage Event

You will see a message in the Log4j output that looks like the following:

```
YY/MM/DD HH:mm:ss INFO OpenLineageContext: Lineage completed successfully: ResponseMessage(responseCode=200, body=null, error=null) <... LINEAGE INFO ...>
```