---
sidebar_position: 5
---

# Python

:::info
This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.
:::

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