---
sidebar_position: 4
---

# Using OpenLineage with older versions of Airflow

For Airflow 2.3+ OpenLineage integration automatically registers itself. Nothing else is required besides specifying where OpenLineage events should end up. However, some additional configuration is required for older OpenLineage versions.

## Airflow 2.1 - 2.2

Integration for those versions has limitations: it does not support tracking failed jobs, and job starts are registered only when job ends.

To make OpenLineage work, in addition to installing `openlineage-airflow` you need to set your `LineageBackend` 
in your `airflow.cfg` or via environmental variable `AIRFLOW__LINEAGE__BACKEND` to

```
openlineage.lineage_backend.OpenLineageBackend
```

In contrast to integration in 1.10 via subclassing `DAG`, `LineageBackend` based approach collects all metadata for task on each task completion.


## Airflow 1.10

To collect Airflow DAG metadata with OpenLineage in this version, you need to replace DAG import path in your DAG files like this:

```
- from airflow import DAG
+ from openlineage.airflow import DAG
```
