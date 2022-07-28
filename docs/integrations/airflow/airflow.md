---
sidebar_position: 1
---

# Apache Airflow

**Airflow** is a widely-used workflow automation and scheduling platform that can be used to author and manage data pipelines. Airflow uses workflows made of directed acyclic graphs (DAGs) of tasks. To learn more about Airflow, check out the Airflow [documentation](https://airflow.apache.org/docs/apache-airflow/stable/index.html).

## How does Airflow work with OpenLineage?

Understanding complex inter-DAG dependencies and providing up-to-date runtime visibility into DAG execution can be challenging. OpenLineage integrates with Airflow to collect DAG lineage metadata so that inter-DAG dependencies are easily maintained and viewable via a lineage graph, while also keeping a catalog of historical runs of DAGs.

![image](./af-schematic.svg)


The DAG metadata collected can answer questions like:

* Why has a DAG failed?
* Why has the DAG runtime increased after a code change?
* What are the upstream dependencies of a DAG?


## How can I use this integration?

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
For example, to send OpenLineage events to a local instance of Marquez, use:

```bash
OPENLINEAGE_AIRFLOW=http://localhost:5000
```

To set up additional configuration, or send events to other targets than HTTP server (like Kafka topic) take a look at [client configuration.](../../client/python.md)

If you use older version of Airflow than 2.3.0, [additional configuration is required](older.md).

#### USAGE

When enabled, the integration will:

* On TaskInstance **start**, collect metadata for each task
* Collect task input / output metadata (source, schema, etc)
* Collect task run-level metadata (execution time, state, parameters, etc)
* On TaskInstance **complete**, also mark the task as complete in Marquez

## Where can I learn more?

* Take a look at Marquez's Airflow [example](https://github.com/MarquezProject/marquez/tree/main/examples/airflow) to learn how to enable OpenLineage metadata collection for Airflow DAGs and troubleshoot failing DAGs using Marquez.
* Watch [Data Lineage with OpenLineage and Airflow](https://www.youtube.com/watch?v=2s013GQy1Sw)

## Feedback

You can reach out to us on [slack](http://bit.ly/OpenLineageSlack) and leave us feedback!  
