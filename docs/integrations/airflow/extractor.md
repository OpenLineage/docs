---
sidebar_position: 1
---

# Custom extractors

OpenLineage integration works by detecting which Airflow operators your dag is using, and extracting lineage 
data from them using extractors. 

However, there are hundreds of operators in Airflow. In addition, many people and teams write their own operators to 
automate repeatable work - like using the same code from `PythonOperator` everywhere.

So, most of those operators aren't directly supported in OpenLineage out of the box. 
To handle this situation, OpenLineage allows you to provide custom extractors for any operators.


## Interface

Custom extractors have to derive from `BaseExtractor`.

Extractors have three methods to implement: `extract`, `extract_on_complete` and `get_operator_classnames`.
The last one is a classmethod that is used to provide list of operators that your extractor can get lineage from.

For example:

```python
@classmethod
def get_operator_classnames(cls) -> List[str]:
  return ['PostgresOperator']
```

If the name of the operator matches one of the names on the list, the extractor will be instantiated - with operator
provided in the extractor's `self.operator` property - and both `extract` and `extract_on_complete` methods will be called. 
They are used to provide actual information data. The difference is that `extract` is called before operator's `execute` 
method, while `extract_on_complete` is called after. This can be used to extract any additional information that the operator
sets on it's own properties. Good example is `SnowflakeOperator` that sets `query_ids` after execution.

Both methods return `TaskMetadata` structure:

```python
@attr.s
class TaskMetadata:
    name: str = attr.ib()  # deprecated
    inputs: List[Dataset] = attr.ib(factory=list)
    outputs: List[Dataset] = attr.ib(factory=list)
    run_facets: Dict[str, BaseFacet] = attr.ib(factory=dict)
    job_facets: Dict[str, BaseFacet] = attr.ib(factory=dict)
```

Inputs and outputs are lists of plain [OpenLineage datasets](../../client/python.md) 

`run_facets` and `job_facets` are dictionaries of optional [JobFacets](../../client/python.md) and [RunFacets](../../client/python.md) that would be attached to the job - for example,
you might want to attach `SqlJobFacet` if your operator is executing SQL.

:::info
Add spec description that would be used in those links.
:::


## Registering custom extractor

OpenLineage integration does not know that you've provided an extractor unless you'll register it.

The way to do that is to add them to `OPENLINEAGE_EXTRACTORS` environment variable.
```
OPENLINEAGE_EXTRACTORS=full.path.to.ExtractorClass
```

If you have multiple custom extractors, separate the paths with comma `(;)` 
```
OPENLINEAGE_EXTRACTORS=full.path.to.ExtractorClass;full.path.to.AnotherExtractorClass
```

Optionally, you can separate them with whitespace. It's useful if you're providing them as part of some YAML file.

```
OPENLINEAGE_EXTRACTORS: >-
  full.path.to.FirstExtractor;
  full.path.to.SecondExtractor
``` 

Second method to register extractors - as a workaround for Airflow 1.10.x only - is to register all additional operator-extractor pairings by 
providing `lineage_custom_extractors` argument in `openlineage.airflow.DAG`.


## Debugging issues

There are two common problems associated with custom extractors. 
First, is wrong path provided to `OPENLINEAGE_EXTRACTORS`. 
The path needs to be exactly the same as one you'd use from your code. If the path is wrong, the extractor won't get imported
and OpenLineage events won't be emitted.

Second one, and maybe more insidious, are imports from Airflow. Due to the fact that OpenLineage code gets instantiated when
Airflow worker itself starts, any import from Airflow can be unnoticeably cyclical. This causes OpenLineage extraction to fail.

To avoid this issue, import from Airflow only locally - in `extract` or `extract_on_complete` methods. If you need imports for 
type checking, guard them behind `typing.TYPE_CHECKING`.