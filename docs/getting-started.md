---
title: Getting Started
sidebar_position: 2
---

:::info
This page is in need of some refactoring. Suggestions are welcome using the Edit link at the bottom.
:::

This guide covers how you can quickly get started collecting _dataset_, _job_, and _run_ metadata using OpenLineage. We'll first introduce you to OpenLineage's core model, show how to collect _run-level_ metadata as OpenLineage events using [Marquez](https://marquezproject.ai) as the [HTTP backend](https://github.com/OpenLineage/OpenLineage#scope), then explore lineage metadata via the Marquez UI.

## OpenLineage Core Model

Below, we illustrate the challenges of collecting lineage metadata from multiple sources, schedulers and/or data processing frameworks. We then outline the design benefits of defining an _Open Standard_ for lineage metadata collection.

#### BEFORE:

![image](./before-ol.svg)

* Each project has to instrument it's own custom metadata collection integration, therefore duplicating efforts.
* Integrations are external and can break with new versions of the underlying scheduler and/or data processing framework, requiring projects to ensure _backwards_ compatibility.

#### WITH OPENLINEAGE:

![image](./with-ol.svg)

* Integration efforts are shared _across_ projects.
* Integrations can be _pushed_ to the underlying scheduler and/or data processing framework; no need to play catch up and ensure compatibility!

### Design

OpenLineage is an _Open Standard_ for lineage metadata collection designed to record metadata for a _job_ in execution. The standard defines a generic model of _dataset_, _job_, and _run_ entities uniquely identified using consistent naming strategies. The core model is highly extensible via facets. A **facet** is user-defined metadata and enables entity enrichment. We encourage you to familiarize yourself with the core model below:

![image](./model.svg)

### Benefits

* An **open standard** with a specification for collecting **lineage** metadata.
* Focuses on **job-level** execution.
  * Runs
  * Datasets
* **Event-based** metadata collection.
* **Extensible** model via **facets**.


## Prerequisites

Before you begin, make sure you have installed:

* [Docker 17.05](https://docs.docker.com/install)+
* [Docker Compose](https://docs.docker.com/compose/install)

> **Note:** In this guide, we'll be using Marquez as the OpenLineage HTTP backend and running the HTTP server via Docker.

### Run Marquez with [Docker](https://github.com/MarquezProject/marquez/blob/main/Dockerfile)

The easiest way to get up and running with Marquez is Docker. Check out the Marquez source code and run the `./docker/up.sh` script:

```bash
$ git clone git@github.com:MarquezProject/marquez.git && cd marquez

$ ./docker/up.sh
```

> **Tip:** Pass the `--build` flag to the script to build images from source, or `--tag X.Y.Z` to use a tagged image.

To view the Marquez UI and verify it's running, open [http://localhost:3000](http://localhost:3000). The UI enables you to discover dependencies between jobs and the datasets they produce and consume via the lineage graph, view run-level metadata of current and previous job runs, and much more.

## Collect Run-Level Metadata

Marquez is an [LF AI & DATA](https://lfaidata.foundation) incubation project to collect, aggregate, and visualize a data ecosystem’s metadata. Marquez is the reference implementation of the OpenLineage standard.

In this example, we show how you can collect dataset and job metadata using Marquez. Using the [LineageAPI](https://marquezproject.github.io/marquez/openapi.html#tag/Lineage), metadata will be collected as OpenLineage events using the run ID `d46e465b-d358-4d32-83d4-df660ff614dd`. The run ID will enable the tracking of run-level metadata over time for the job `my-job`. So, let's get started!

> **Note:** The example shows how to collect metadata via direct HTTP API calls using `curl`. But, you can also get started using our client library for [Java](https://github.com/MarquezProject/marquez/tree/main/clients/java) or [Python](https://github.com/MarquezProject/marquez/tree/main/clients/python).

### Step 1: Start a Run

Use `d46e465b-d358-4d32-83d4-df660ff614dd` to **start** the run for `my-job` with `my-input` as the input dataset:

#### REQUEST

```bash
$ curl -X POST http://localhost:5000/api/v1/lineage \
  -H 'Content-Type: application/json' \
  -d '{
        "eventType": "START",
        "eventTime": "2020-12-28T19:52:00.001+10:00",
        "run": {
          "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"
        },
        "job": {
          "namespace": "my-namespace",
          "name": "my-job"
        },
        "inputs": [{
          "namespace": "my-namespace",
          "name": "my-input"
        }],  
        "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"
      }'
```

#### RESPONSE

`201 CREATED`

### Step 2: Complete a Run

Use `d46e465b-d358-4d32-83d4-df660ff614dd` to **complete** the run for `my-job` with `my-output` as the output dataset. We also specify the [schema](https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.md#dataset-facets) **facet** to collect the schema for `my-output` before marking the run as completed. Note, you don't have to specify the input dataset `my-input` again for the run since it already has been associated with the run ID:

#### REQUEST

```bash
$ curl -X POST http://localhost:5000/api/v1/lineage \
  -H 'Content-Type: application/json' \
  -d '{
        "eventType": "COMPLETE",
        "eventTime": "2020-12-28T20:52:00.001+10:00",
        "run": {
          "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"
        },
        "job": {
          "namespace": "my-namespace",
          "name": "my-job"
        },
        "outputs": [{
          "namespace": "my-namespace",
          "name": "my-output",
          "facets": {
            "schema": {
              "_producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client",
              "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/spec/OpenLineage.json#/definitions/SchemaDatasetFacet",
              "fields": [
                { "name": "a", "type": "VARCHAR"},
                { "name": "b", "type": "VARCHAR"}
              ]
            }
          }
        }],     
        "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"
      }'
```

#### RESPONSE

`201 CREATED`

## View Collected Lineage Metadata

### Search Job Metadata

To view lineage metadata collected by Marquez, browse to the UI by visiting [http://localhost:3000](http://localhost:3000). Then, use the search bar in the upper right-side of the page and search for the job `my-job`. To view lineage metadata for `my-job`, click on the job from the drop-down list:

![image](./marquez-search-view-job.png)

### View Job Metadata

You should see the job `namespace`, `name`, `my-input` as an input dataset and `my-output` as an output dataset in the lineage graph and the job run marked as `COMPLETED `: 

![image](./marquez-tab-view-job-completed.png)

### View Input Dataset Metadata

Finally, click on the output dataset `my-output` for `my-job`. You should see the dataset `name`, `schema`, and `description`:

![image](./marquez-tab-view-dataset-output.png)

## Summary

In this simple example, we showed you how to use Marquez to collect dataset and job metadata with Openlineage. We also walked you through the set of HTTP [API](https://marquezproject.github.io/marquez/openapi.html) calls to successfully mark a run as **complete** and view the lineage metadata collected with Marquez.

## Next Steps

* Take a look at Marquez's Airflow [example](https://github.com/MarquezProject/marquez/tree/main/examples/airflow) to learn how to enable OpenLineage metadata collection for Airflow DAGs and troubleshoot failing DAGs using Marquez.
* Listen to [Solving Data Lineage Tracking And Data Discovery At WeWork](https://www.dataengineeringpodcast.com/marquez-data-lineage-episode-111).
* Listen to [Unlocking The Power of Data Lineage In Your Platform with OpenLineage](https://www.dataengineeringpodcast.com/openlineage-data-lineage-specification-episode-187).

## Feedback

What did you think of this guide? We would love to hear feedback, and we can be found on the [OpenLineage Slack](http://bit.ly/OpenLineageSlack).
