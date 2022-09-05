---
sidebar_position: 1
---

# Developing With OpenLineage

As there are hundreds and possibly thousands databases, query engines and other tools you could use to process, create and move data, there's great chance that existing OpenLineage integration won't cover your needs.

However, OpenLineage project also provides libraries you could use to write your own integration. 

### Clients

For [Python](../../client/python.md) and [Java](../../client/java.md), we've created clients that you can use to properly create and emit OpenLineage events to HTTP, Kafka, and other consumers.

### Common Library (Python)

Getting lineage from systems like BigQuery or Redshift isn't necessarily tied to orchestrator or processing engine you're using. For this reason, we've extracted
that functionality from our Airflow library and [packaged it for separate use](https://pypi.org/project/openlineage-integration-common/). 

### Environment Variables

The following environment variables are available commonly for both Java and Python languages.

|Name|Description|Since|
|---|---|---|
|OPENLINEAGE_API_KEY|The optional API key to be set on each lineage request. This will be set as a Bearer token in case authentication is required.||
|OPENLINEAGE_CONFIG|The optional path to locate the configuration file. The configuration file is in YAML format. Example: `openlineage.yml`||
|OPENLINEAGE_DISABLED|When set to `true`, will prevent OpenLineage from emitting events to the receiving backend|0.9.0|
|OPENLINEAGE_URL|The URL for the HTTP transport of where to emit lineage events to. If not yet, no lineage data will be emitted. Example: `http://localhost:8080`||

### SQL parser

We've created SQL parser that allows you to extract lineage from SQL statements. The parser is implemented in Rust, however, it's also available as a [Python library](https://pypi.org/project/openlineage-sql/).
You can take a look at it's documentation [here](../sql) or code on [GitHub](https://github.com/OpenLineage/OpenLineage/tree/main/integration/sql).
