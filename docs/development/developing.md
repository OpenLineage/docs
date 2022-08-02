---
sidebar_position: 1
---

# Developing With OpenLineage

As there are hundreds and possibly thousands databases, query engines and other tools you could use to process, create and move data, there's great chance that existing OpenLineage integration won't cover your needs.

However, OpenLineage project also provides libraries you could use to write your own integration. 

### Clients

For [Python](../client/python.md) and [Java](../client/java.md), we've created clients that you can use to properly create and emit OpenLineage events to HTTP, Kafka, and other consumers.

### Common Library (Python)

Getting lineage from systems like BigQuery or Redshift isn't necessarily tied to orchestrator or processing engine you're using. For this reason, we've extracted
that functionality from our Airflow library and [packaged it for separate use](https://pypi.org/project/openlineage-integration-common/). 

### SQL parser

We've created SQL parser that allows you to extract lineage from SQL statements. The parser is implemented in Rust, however, it's also available as a [Python library](https://pypi.org/project/openlineage-sql/).
You can take a look at it's documentation [here](./sql) or code on [GitHub](https://github.com/OpenLineage/OpenLineage/tree/main/integration/sql).