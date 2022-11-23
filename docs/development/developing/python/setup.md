---
title: Setup a development environment
sidebar_position: 1
---

There are four Python OpenLineage packages that you can install locally when setting up a development environment.<br />
Two of them: [openlineage-integration-common](https://pypi.org/project/openlineage-integration-common/) and [openlineage-airflow](https://pypi.org/project/openlineage-airflow/) have dependecy on [openlineage-python](https://pypi.org/project/openlineage-python/) client and [openlineage-sql](https://pypi.org/project/openlineage-sql/).

Typically, you first need to build `openlineage-sql` locally (see [README](https://github.com/OpenLineage/OpenLineage/blob/main/integration/sql/README.md)). After each release you have to repeat this step in order to bump local version of the package.

To install Openlineage Common, Python Client & Dagster integration you need to run pip install command with a link to local directory:

```bash
$ python -m pip install -e .[dev]
```
In zsh:
```bash
$ python -m pip install -e .\[dev\]
```

To make Airflow integration setup easier you can use run following command in package directory:
```bash
$ pip install -r dev-requirements.txt
```
This should install all needed integrations locally.