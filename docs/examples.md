---
title: Example Lineage Events
sidebar_position: 5
---

:::info
This page needs your contribution! Please contribute new examples using the edit link at the bottom.
:::

### START event with single input 

This is a START event with a single PostgreSQL input dataset.

```json
{
  "eventType": "START",
  "eventTime": "2020-12-28T19:52:00.001+10:00",
  "run": {
    "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"
  },
  "job": {
    "namespace": "workshop",
    "name": "process_taxes"
  },
  "inputs": [{
    "namespace": "postgres://workshop-db:None",
    "name": "workshop.public.taxes"
  }],  
  "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"
}
```

### COMPLETE event with single output

This is a COMPLETE event with a single PostgreSQL output dataset.

```json
{
  "eventType": "COMPLETE",
  "eventTime": "2020-12-28T20:52:00.001+10:00",
  "run": {
    "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"
  },
  "job": {
    "namespace": "workshop",
    "name": "process_taxes"
  },
  "outputs": [{
    "namespace": "postgres://workshop-db:None",
    "name": "workshop.public.unpaid_taxes"
  }],     
  "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"
}
```
