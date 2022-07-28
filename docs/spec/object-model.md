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

### Run Facet
- **nominalTime**: Captures the time this run is scheduled for. This is a typical usage for time based scheduled job. The job has a nominal schedule time that will be different from the actual time it is running at.

- **parent**: Captures the parent job and Run when the run was spawn from a parent run. For example in the case of [Airflow](https://airflow.apache.org/), there's a run for the DAG that then spawns runs for individual tasks that would refer to the parent run as the DAG run. Similarly when a SparkOperator starts a Spark job, this creates a separate run that refers to the task run as its parent.

- **errorMessage**: Captures potential error message, programming language - and optionally stack trace - with which the run failed.

## Job
An abstract `process` that consumes, executes, and produces datasets (defined as its inputs and outputs). It is identified by a `unique name` within a `namespace`. The *Job* evolves over time and this change is captured during the job runs. 

### Job Facet
- **sourceCodeLocation**: Captures the source code location and version (example: git sha) of the job.

- **sourceCode**: Captures language (ex. python) and actual source code of the job. Using this source code, users can gain details of what the job does.

- **sql**: Captures the SQL query if this job runs a SQL query.

## Dataset
an abstract representation of data. It has a `unique name` within the `datasource namespace` derived from its physical location (for example, db.host.database.schema.table). Typically, a *Dataset* changes when a job writing to it completes. Similarly to the *Job* and *Run* distinction, metadata that is more static from run to run is captured in a DatasetFacet (for example, the schema that does not change every run), what changes every *Run* is captured as an *InputFacet* or an *OutputFacet* (for example, what subset of the data set was read or written, like a time partition).

### Dataset Facet
- **schema**: Captures the schema of the dataset

- **dataSource**: Captures the Database instance containing this datasets (ex: Database schema. Object store bucket, ...)

- **lifecycleStateChange**: Captures the lifecycle states of the dataset like: alter, create, drop, overwrite, rename, truncate.

- **version**: Captures the dataset version when versioning is defined by database (ex. Iceberg snapshot ID)

#### Input Dataset Facets
- **dataQualityMetrics**: Captures dataset level and column level data quality metrics when scanning a dataset whith a DataQuality library (row count, byte size, null count, distinct count, average, min, max, quantiles).

- **dataQualityAssertions**: Captures the result of running data tests on dataset or its columns.

#### Output Dataset Facets
- **outputStatistics**: Captures the size of the output written to a dataset (row count and byte size).