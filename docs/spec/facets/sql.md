---
sidebar_position: 4
---


# SQL Job Facet


The SQL Job Facet contains a SQL query that was used in a particular job.  

Example:

```json
"sql": {
	"query": "select id, name from schema.table where id = 1"
}
```


The facet specification can be found [here](https://github.com/OpenLineage/OpenLineage/blob/main/spec/facets/SQLJobFacet.json)