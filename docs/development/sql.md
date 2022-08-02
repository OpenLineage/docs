---
sidebar_position: 3
---

# SQL parser

**SQL** is the most widely used data processing language and for a lot of use cases, getting lineage from SQL-based tasks is solving majority of the problem.
For this reason, we've created SQL parser that allows you to get lineage directly by processing SQL query.


Our SQL parser is based on excellent [sqlparser-rs](https://github.com/sqlparser-rs/sqlparser-rs) library.

### Interface

SQL parser interface expressed in pseudo-python.

```python
class DbTableMeta:
    database: Optional[str]
    schema: Optional[str]
    name: str


class SqlMeta:
    in_tables: List[DbTableMeta]
    out_tables: List[DbTableMeta]

def parse(
    sql: Union[List[str], str],
    # Setting dialect allows you to enable some dialect-specific processing 
    # like using backticks "`" as delimiters in BigQuery tables.
    dialect: Optional[str] = None,   
    # Setting this will make parser use this schema for every table that
    # does not specify schema. 
    default_schema: Optional[str] = None
) -> Optional[SqlMeta] 
```

### Default databases and schemas

SQL processing engines and databases sometimes rely on some _implicit_ information. For example, they often allow you to set current database or schema, instead of forcing
you to specify fully-qualified table name every time you're refering to it.

For this reason, bare SQL parser might be insufficient to fully understand which tables the query refers to. 
We recommend to process the data that you acquired from SQL parser to take that into account.
