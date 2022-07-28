---
sidebar_position: 5
---

# Python

## Overview

The Python client is the basis of existing OpenLineage integrations such as Airflow and dbt.

The client enables the creation of lineage metadata events with Python code. The core data structures currently offered by the client are the `RunEvent`, `RunState`, `Run`, `Job`, `Dataset`, and `Transport` classes. These either configure or collect data for the emission of lineage events.

You can use the client to create your own custom integrations.

## Installation

Download the package using `pip` with 
```
pip install openlineage-python
```

To install the package from source, use 
```
python setup.py install
```

## Configuration

We recommend configuring the client with an `openlineage.yml` file that tells the client how to connect to an OpenLineage backend.

You can make this file available to the client three ways:

1. Set an environment variable to a file path: `OPENLINEAGE_CONFIG=path/to/openlineage.yml`.
2. Put the file in the working directory.
3. Put the file in `$HOME/.openlineage`.

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
- timeout - float specifying a timeout value when sending an event. Default: 5 seconds. (optional)
- verify - boolean specifying whether or not the client should verify TLS certificates from the backend. Default: true. (optional)
- auth - dictionary specifying authentication options. Requires the type property. (optional)
- type - string specifying the "api_key" or the fully qualified class name of your TokenProvider. (required if `auth` is provided)
- api_key - string setting the Authentication HTTP header as the Bearer. (required if `api_key` is set)

##### Kafka
- type - string (required)
- config - string containing a Kafka producer config (required)
- topic - string specifying the topic (required)
- flush - boolean specifying whether or not Kafka should flush after each event. Default: true. (optional)

### Custom Transport Type

To implement a custom transport, follow the instructions in [`transport.py`](https://github.com/OpenLineage/OpenLineage/blob/main/client/python/openlineage/client/transport/transport.py).

## Getting Started

To try out the client, follow the steps below to install and explore OpenLineage, Marquez (the reference implementation of OpenLineage), and the client itself. Then, the instructions will show you how to use these tools to add a run event and datasets to an existing namespace.

### Prerequisites
- Docker 17.05+
- Docker Compose 1.29.1+
- Git (preinstalled on most versions of MacOS; verify your version with `git version`)
- 4 GB of available memory (the minimum for Docker — more is strongly recommended)

### Install OpenLineage and Marquez

Clone the Marqez Github repository:
```
git clone https://github.com/MarquezProject/marquez.git
```

### Install the Python client
```
pip install openlineage-python
```

### Start Docker and Marquez
Start Docker Desktop
Run Marquez with preloaded data:
```
cd marquez
./docker/up.sh --seed
```

Marquez should be up and running at `http://localhost:3000`.

Take a moment to explore Marquez to get a sense of how metadata is displayed in the UI. Namespaces – the global contexts for runs and datasets – can be found in the top right corner, and icons for jobs and runs can be found in a tray along the left side.

Next, configure OpenLineage and add a script to your project that will generate a new job and new datasets within an existing namespace (here we’re using the `food_delivery` namespace that got passed to Marquez with the `–seed` argument we used earlier).

Create a directory for your script:
```
..
mkdir python_scripts && cd python_scripts
```

In the python_scripts directory, create a Python script (we used the name `generate_events.py` for ours) and an `openlineage.yml` file.

In `openlineage.yml`, define a transport type and URL to tell OpenLineage where and how to send metadata:

```
Transport:
	Type: “http”
	Url: “http://localhost:5000”
```

In `generate_events.py`, import the Python client and the methods needed to create a job and datasets. Also required (to create a run): the `datetime` and `uuid` packages:

```
from openlineage.client.run import RunEvent, RunState, Run, Job, Dataset
from openlineage.client import OpenLineageClient
from datetime import datetime
from uuid import uuid4
```

Then, in the same file, initialize the Python client:
```
client = OpenLineageClient.from_environment()
```

Specify the producer of the new lineage metadata with a string:
```
producer = “OpenLineage.io/website/blog”
```

Now you can create some basic dataset objects. These require a namespace and name:
```
inventory = Dataset(namespace=“food_delivery”, name=“public.inventory”)
menus = Dataset(namespace=“food_delivery”, name=“public.menus_1”)
orders = Dataset(namespace=“food_delivery”, name=“public.orders_1”)
```

You can also create a job object (we’ve borrowed this one from the existing `food_delivery` namespace):
```
job = Job(namespace=“food_delivery”, name=“example.order_data”)
```

To create a run object you’ll need to specify a unique ID:
```
run = Run(str(uuid4()))
```

a START run event:
```
client.emit(
	RunEvent(
		RunState.START,
		datetime.now().isoformat(),
		run, job, producer
	)
)
```

and, finally, a COMPLETE run event:
```
client.emit(
	RunEvent(
		RunState.COMPLETE,
		datetime.now().isoformat(),
		run, job, producer,
		inputs=[inventory],
		outputs=[menus, orders],
	)
)
```

Now you have a complete script for creating datasets and a run event! Execute it in the terminal to send the metadata to Marquez:
```
python3 generate_scripts.py
```

Marquez will update itself automatically, so the new job and datasets should now be visible in the UI. Clicking on the jobs icon (the icon with the three interlocking gears), will make the `example.order_data` job appear in the list of jobs:

![the Marquez jobs list](./mqz_jobs.png)

When you click on the job, you will see a new map displaying the job, input and outputs we created with our script:

![the Marquez graph](./mqz_graph.png)

