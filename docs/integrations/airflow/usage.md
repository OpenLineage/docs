---
sidebar_position: 1
title: Using the Airflow Integration
---

#### PREREQUISITES

To use the OpenLineage Airflow integration, you'll need a running [Airflow instance](https://airflow.apache.org/docs/apache-airflow/stable/start.html). You'll also need an OpenLineage-compatible [backend](https://github.com/OpenLineage/OpenLineage#scope).

#### INSTALLATION

To download and install the latest `openlineage-airflow` library, update the `requirements.txt` file of your running Airflow instance with: 

```
openlineage-airflow
```

#### CONFIGURATION

Next, specify where you want OpenLineage to send events. There are a few options.
The simplest one is to use the `OPENLINEAGE_URL` environment variable.
For example, to send OpenLineage events to a local instance of [Marquez](https://github.com/MarquezProject/marquez), use:

```bash
OPENLINEAGE_URL=http://localhost:5000
```

To set up an additional configuration, or to send events to targets other than an HTTP server (e.g., a Kafka topic), [configure a client.](../../client/python.md)

If you use a version of Airflow older than 2.3.0, [additional configuration is required](older.md).

### Environment Variables

The following environment variables are available specifically for the Airflow integration.

|Name|Description|Since|
|---|---|---|
|OPENLINEAGE_AIRFLOW_DISABLE_SOURCE_CODE|Set to `False` if you want source code of callables provided in PythonOperator or BashOperator `NOT` to be included in OpenLineage events.||
|OPENLINEAGE_EXTRACTORS|The optional list of extractors class in case you need to use custom extractors.<br/>For example: `OPENLINEAGE_EXTRACTORS=full.path.to.ExtractorClass;full.path.to.AnotherExtractorClass`||
|OPENLINEAGE_NAMESPACE|The optional namespace that the lineage data belongs to. If not specified, defaults to `default`.||

#### USAGE

When enabled, the integration will:

* On TaskInstance **start**, collect metadata for each task.
* Collect task input / output metadata (source, schema, etc.).
* Collect task run-level metadata (execution time, state, parameters, etc.)
* On TaskInstance **complete**, also mark the task as complete in Marquez.
