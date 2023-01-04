---
sidebar_position: 2
---
# Using the Airflow integration

#### PREREQUISITES

To use the OpenLineage Airflow integration, you'll need a running Airflow instance. You'll also need an OpenLineage compatible [backend](https://github.com/OpenLineage/OpenLineage#scope).

#### INSTALLATION

To download and install the latest `openlineage-airflow` library, update the `requirements.txt` file of your running Airflow instance with: 

```
openlineage-airflow
```

#### CONFIGURATION

Next, we'll need to specify where we want OpenLineage to send events. There are a few options.
Simplest one is to use `OPENLINEAGE_URL` environment variable.
For example, to send OpenLineage events to a local instance of [Marquez](https://github.com/MarquezProject/marquez), use:

```bash
OPENLINEAGE_URL=http://localhost:5000
```

To set up additional configuration, or send events to other targets than HTTP server (like Kafka topic) take a look at [client configuration.](../../client/python.md)

If you use older version of Airflow than 2.3.0, [additional configuration is required](older.md).

### Environment Variables

The following environment variables are available specifically for Airflow integration.

|Name|Description|Since|
|---|---|---|
|OPENLINEAGE_AIRFLOW_DISABLE_SOURCE_CODE|Set to `False` if you want source code of callables provided in PythonOperator or BashOperator `NOT` to be included in OpenLineage events||
|OPENLINEAGE_EXTRACTORS|The optional list of extractors class in case you need to use custom extractors.<br/>Example: `OPENLINEAGE_EXTRACTORS=full.path.to.ExtractorClass;full.path.to.AnotherExtractorClass`||
|OPENLINEAGE_NAMESPACE|The optional namespace that the lineage data belongs to. If not specified, defaults to `default`||

#### USAGE

When enabled, the integration will:

* On TaskInstance **start**, collect metadata for each task
* Collect task input / output metadata (source, schema, etc)
* Collect task run-level metadata (execution time, state, parameters, etc)
* On TaskInstance **complete**, also mark the task as complete in Marquez
