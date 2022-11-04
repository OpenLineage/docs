---
sidebar_position: 5
---

# Facets & Extensibility

Facets provides context to the OpenLineage events. Generally, an OpenLineage event contains the type of the event, who created it, and when the event happened. In addition to the basic information related to the event, it provides `facets` for more details in four general categories:

- job: What kind of activity ran
- run: How it ran
- inputs: What was used during its run
- outputs: What was the outcome of the run

Here is an example of the four facets in action. Notice the element `facets` under each of the four categories of OpenLineage event:

```json
{
  "eventType": "START",
  "eventTime": "2020-12-28T19:52:00.001+10:00",
  "run": {
    "runId": "d46e465b-d358-4d32-83d4-df660ff614dd",
    "facets": {
        "parent": {
            "job": {
                "name": "dbt-execution-parent-job", 
                "namespace": "dbt-namespace"
            },
            "run": {
                "runId": "f99310b4-3c3c-1a1a-2b2b-c1b95c24ff11"
            }
        }
    }
  },
  "job": {
    "namespace": "workshop",
    "name": "process_taxes",
    "facets": {
        "sql": {
            "query": "insert into taxes_out select id, name, is_active from taxes_in"
        }
    }
  },
  "inputs": [{
    "namespace": "postgres://workshop-db:None",
    "name": "workshop.public.taxes-in",
    "facets": {
        "schema": {
            "fields": [
                {
                "name": "id",
                "type": "int",
                "description": "Customer's identifier"
                },
                {
                "name": "name",
                "type": "string",
                "description": "Customer's name"
                },
                {
                "name": "is_active",
                "type": "boolean",
                "description": "Has customer completed activation process"
                }
            ]
        }
    }
  }],  
  "outputs": [{
    "namespace": "postgres://workshop-db:None",
    "name": "workshop.public.taxes-out",
    "facets": {
        "schema": {
            "fields": [
                {
                "name": "id",
                "type": "int",
                "description": "Customer's identifier"
                },
                {
                "name": "name",
                "type": "string",
                "description": "Customer's name"
                },
                {
                "name": "is_active",
                "type": "boolean",
                "description": "Has customer completed activation process"
                }
            ]
        }
    }
  }],  
  "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"
}
```
For more information of what kind of facets are available as part of OpenLineage spec, pleaes refer to the sub sections `Run Facets`, `Job Facets`, and `Dataset Facets` of this document.

## Custom Facets
In addition to the existing facets mentioned in this documentation, users can extend the base facets and provide their own facet definition as part of the payload in OpenLineage event. For example, when OpenLineage event is emitted from the Apache Airflow using OpenLineage's Airflow integration, the following facets can be observed:

```json
{
  "eventTime": "2022-10-03T00:07:56.891667Z",
  "eventType": "START",
  "inputs": [],
  "job": {
    "facets": {},
    "name": "inlet_outlet_demo.test-operator",
    "namespace": "uninhabited-magnify-7821"
  },
  "outputs": [],
  "producer": "https://github.com/OpenLineage/OpenLineage/tree/0.13.0/integration/airflow",
  "run": {
    "facets": {
      "airflow_runArgs": {
        "_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.13.0/integration/airflow",
        "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/BaseFacet",
        "externalTrigger": true
      },
      "airflow_version": {
        "_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.13.0/integration/airflow",
        "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/BaseFacet",
        "airflowVersion": "2.3.4+astro.1",
        "openlineageAirflowVersion": "0.13.0",
        "operator": "airflow.operators.python.PythonOperator",
        "taskInfo": {
          "_BaseOperator__from_mapped": false,
          "_BaseOperator__init_kwargs": {
            "depends_on_past": false,
            "email": [],
            "email_on_failure": false,
            "email_on_retry": false,
            "op_kwargs": {
              "x": "Apache Airflow"
            },
            "owner": "demo",
            "python_callable": "<function python_operator at 0x40414aa040>",
            "start_date": "2022-10-02T00:00:00+00:00",
            "task_id": "test-operator"
          },
          "_BaseOperator__instantiated": true,
          "_dag": {
            "dag_id": "inlet_outlet_demo",
            "tags": []
          },
          "_inlets": [],
          "_log": "<Logger airflow.task.operators (DEBUG)>",
          "_outlets": [],
          "depends_on_past": false,
          "do_xcom_push": true,
          "downstream_task_ids": "{'end'}",
          "email": [],
          "email_on_failure": false,
          "email_on_retry": false,
          "executor_config": {},
          "ignore_first_depends_on_past": true,
          "inlets": [],
          "op_args": [],
          "op_kwargs": {
            "x": "Apache Airflow"
          },
          "outlets": [],
          "owner": "demo",
          "params": "{}",
          "pool": "default_pool",
          "pool_slots": 1,
          "priority_weight": 1,
          "python_callable": "<function python_operator at 0x40414aa040>",
          "queue": "default",
          "retries": 0,
          "retry_delay": "0:05:00",
          "retry_exponential_backoff": false,
          "show_return_value_in_logs": true,
          "start_date": "2022-10-02T00:00:00+00:00",
          "task_group": "<airflow.utils.task_group.TaskGroup object at 0x40416160a0>",
          "task_id": "test-operator",
          "trigger_rule": "all_success",
          "upstream_task_ids": "{'begin'}",
          "wait_for_downstream": false,
          "weight_rule": "downstream"
        }
      },
      "parentRun": {
        "_producer": "https://github.com/OpenLineage/OpenLineage/tree/0.13.0/integration/airflow",
        "_schemaURL": "https://raw.githubusercontent.com/OpenLineage/OpenLineage/main/spec/OpenLineage.json#/definitions/ParentRunFacet",
        "job": {
          "name": "inlet_outlet_demo",
          "namespace": "uninhabited-magnify-7821"
        },
        "run": {
          "runId": "4da6f6d2-8902-3b6c-be7e-9269610a8c8f"
        }
      }
    },
    "runId": "753b0c7c-e424-4e10-a5ab-062ae5be43ee"
  }
}
```
Both `airflow_runArgs` and `airflow_version` are not part of the default OpenLineage facets found [here](https://openlineage.io/apidocs/openapi). However, as long as they follow the [BaseFacet](https://openlineage.io/spec/1-0-2/OpenLineage.json#/$defs/BaseFacet) to contain the two mandatory element `_producer` and `_schemaURL`, it will be accepted and stored as part of the OpenLineage event, and will be able to be retrieved when you query those events.

Custom facets are not part of the default facets. Therefore, it will be treated as a payload data as-is, but applications retrieving those, if they have the capability to understand its structure and use them, should be able to do so without any problems.

:::info
You're welcome to contribute using the Edit link at the bottom.
:::
