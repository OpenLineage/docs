---
sidebar_position: 5
---

# Python

:::info
This page is a stub! You're welcome to contribute using the Edit link at the bottom.
:::

## Overview

The Python client is the basis of existing OpenLineage integrations such as Airflow and dbt.

The client enables the creation of lineage metadata events with Python code. The core data structures currently offered by the client include the `RunEvent`, `RunState`, `Run`, `Job`, `Dataset`, and `Transport` classes. These either configure or collect data for the emission of lineage events.

A common use-case for the client is the creation of custom integrations.

## Installation

Download the package using `pip` with `$ pip install openlineage-python`.

To install the package from source, use `$ python setup.py install`.

## Configuration

The recommended configuration method is an `openlineage.yml` file that tells the client how to connect to an OpenLineage backend.

This file can be made available to the client three ways:

1. Setting an environment variable to a file path: `OPENLINEAGE_CONFIG=path/to/openlineage.yml`
2. Locating the file in the working directory
3. Locating the file in `$HOME/.openlineage`

In `openlineage.yml`, use a standard transport interface to specify the transport type (`http`, `console`, `kafka`, or custom) and authorization parameters:

```
transport:
  type: "http"
  url: "https://backend:5000"
  auth:
    type: "api_key"
    api_key: "f048521b-dfe8-47cd-9c65-0cb07d57591e"
```

The type property (required) is a fully qualified class name that can be imported.

### Built-in Transport Types

##### HTTP
- type - string (required)
- url - string (required)
- timeout - float parameter specifying a timeout value when sending an event. Default: 5 seconds. (optional)
- verify - boolean specifying whether or not the client should verify TLS certificates from the backend. Default: true. (optional)
- auth - dictionary specifying authentication options. Requires the type property. (optional)
- type - string specifying the "api_key" or the fully qualified class name of your TokenProvider. (required if `auth` is provided)
- api_key - string setting the Authentication HTTP header as the Bearer. (required if `api_key` is set)

##### Kafka
- type - string (required)
- config - string containing a Kafka producer config (required)
- topic - string specifying the topic (required)
- flush - boolean specifying whether or not Kafka should flush after each event. Default: true. (optional)

## Example

```python
#!/usr/bin/env python3

from openlineage.client.run import RunEvent, RunState, Run, Job, Dataset
from openlineage.client.client import OpenLineageClient
from datetime import datetime
from uuid import uuid4

# Initialize the OpenLineage client
client = OpenLineageClient.from_environment()

# Specify the producer of this lineage metadata
producer = "https://github.com/OpenLineage/workshops"

# Create some basic Dataset objects
monthly_summary = Dataset(namespace="postgres://workshop-db:None", name="workshop.public.monthly_summary")
commissions = Dataset(namespace="postgres://workshop-db:None", name="workshop.public.commissions")
taxes = Dataset(namespace="postgres://workshop-db:None", name="workshop.public.taxes")

# Create a Job object
job = Job(namespace="workshop", name="monthly_accounting")

# Create a Run object with a unique ID
run = Run(str(uuid4()))

# Emit a START run event
client.emit(
    RunEvent(
        RunState.START,
        datetime.now().isoformat(),
        run, job, producer
    )
)

# Emit a COMPLETE run event
client.emit(
    RunEvent(
        RunState.COMPLETE,
        datetime.now().isoformat(),
        run, job, producer,
        inputs=[monthly_summary],
        outputs=[commissions, taxes],
    )
)
```