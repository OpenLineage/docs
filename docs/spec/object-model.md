---
sidebar_position: 1
---

# Object Model

:::info
This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.
:::

![OpenLineage Object Model](object-model.svg)

## Run State Update
Run states define the [lifecycle](./run-cycle.md) of the current run. Usually, the state starts with `START` and ends with `COMPLETE`. Also, any state will also have timestamp of when this particular state happened.

## Run
Specifies `instance` of a particular running _job_. Every run will have a uniquely identifiable `run ID` that is usually in [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format, that can later be tracked.

For more details, please refer to the [Run Facets](./facets/run-facets).

## Job
An abstract `process` that consumes, executes, and produces datasets (defined as its inputs and outputs). It is identified by a `unique name` within a `namespace`. The *Job* evolves over time and this change is captured during the job runs. 

For more details, please refer to the [Job Facets](./facets/job-facets).

## Dataset
an abstract representation of data. It has a `unique name` within the `datasource namespace` derived from its physical location (for example, db.host.database.schema.table). Typically, a *Dataset* changes when a job writing to it completes. Similarly to the *Job* and *Run* distinction, metadata that is more static from run to run is captured in a DatasetFacet (for example, the schema that does not change every run), what changes every *Run* is captured as an *InputFacet* or an *OutputFacet* (for example, what subset of the data set was read or written, like a time partition).

For more details, please refer to the [Dataset Facets](./facets/dataset-facets).
