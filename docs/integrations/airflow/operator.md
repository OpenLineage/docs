---
sidebar_position: 2
---

# Lineage in custom operators

As a way of extending the OpenLineage Airflow integration, we are providing a way to [add custom extractors](./extractor.md). 
This is great for people who want to add integration with external operators - for example, a regular Airflow user who wants to support, for example, `GCSToS3Operator`.

However, it's too cumbersome for people who own operators, and want to add the default implementation of OpenLineage for their operators for external users. 
This is why we have an additional way to expose lineage: the `get_openlineage_facets_on_start` and `get_openlineage_facets_on_complete` methods that can be implemented on your Operator.<br />When any of those are present, OpenLineage's `DefaultExtractor` uses them to get lineage data. If you don't define `get_openlineage_facets_on_complete` it will run `get_openlineage_facets_on_start` instead.

For example, let's assume you want to expose lineage from an operator that copies data from one table to another:

```python
class YourCopyTableOperator(BaseOperator):
    def __init__(
        source_table: str,
        target_table: str,
        database: str
        **kwargs
    ):
        super().__init__(**kwargs)
        self.source_table = source_table
        self.target_table = target_table
        self.database = database 
      
    def execute(self, context) -> Any:
        ...  # your implementation

    def get_openlineage_facets_on_start(self) -> OperatorLineage:
        return OperatorLineage(
            inputs=[Dataset(namespace=self.database, name=self.source_table)],
            outputs=[Dataset(namespace=self.database, name=self.target_table)],
            run_facets={},
            job_facets={}
        )
```

Both methods should return `OperatorLineage` structure:

```
@attr.s
class OperatorLineage:
    inputs: List[Dataset] = attr.ib(factory=list)
    outputs: List[Dataset] = attr.ib(factory=list)
    run_facets: Dict[str, BaseFacet] = attr.ib(factory=dict)
    job_facets: Dict[str, BaseFacet] = attr.ib(factory=dict)
```
similar to `TaskMetadata` described in [Custom extractors](./extractor.md#interface).