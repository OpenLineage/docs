---
sidebar_position: 4
title: Using OpenLineage with Older Versions of Airflow
---

:::caution
This page is about Airflow's external integration that works mainly for Airflow versions <2.7.
[If you're using Airflow 2.7+, look at native Airflow OpenLineage provider documentation.](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/index.html)
:::

For Airflow 2.3+ OpenLineage integration automatically registers itself. Nothing else is required besides specifying where OpenLineage events should end up. However, some additional configuration is required for older OpenLineage versions.

## Airflow 2.1 - 2.2

Integration for those versions has limitations: it does not support tracking failed jobs, and job starts are registered only when job ends.

To make OpenLineage work, in addition to installing `openlineage-airflow` you need to set your `LineageBackend` 
in your `airflow.cfg` or via environmental variable `AIRFLOW__LINEAGE__BACKEND` to

```
openlineage.lineage_backend.OpenLineageBackend
```

## Airflow <2.1 

OpenLineage does not work with versions older than Airflow 2.1.
