---
sidebar_position: 4
title: Scheduling from Airflow
---


The same parameters passed to `spark-submit` can be supplied from Airflow and other schedulers. If
using the [openlineage-airflow](../../airflow/airflow.md) integration, each task in the DAG has its own Run id
which can be connected to the Spark job run via the `spark.openlineage.parentRunId` parameter. For example,
here is an example of a `DataProcPySparkOperator` that submits a Pyspark application on Dataproc:

```python
t1 = DataProcPySparkOperator(
    task_id=job_name,
    gcp_conn_id='google_cloud_default',
    project_id='project_id',
    cluster_name='cluster-name',
    region='us-west1',
    main='gs://bucket/your-prog.py',
    job_name=job_name,
    dataproc_pyspark_properties={
      "spark.extraListeners": "io.openlineage.spark.agent.OpenLineageSparkListener",
      "spark.jars.packages": "io.openlineage:openlineage-spark:1.0.0+",
      "spark.openlineage.transport.url": f"{openlineage_url}/api/v1/namespaces/{openlineage_namespace}/jobs/dump_orders_to_gcs/runs/{{{{lineage_run_id(run_id, task)}}}}?api_key={api_key}",
      "spark.openlineage.namespace": openlineage_namespace,
      "spark.openlineage.parentJobName": job_name,
      "spark.openlineage.parentRunId": f"{{{{lineage_run_id(run_id, task)}}}}
    },
    dag=dag)
```
