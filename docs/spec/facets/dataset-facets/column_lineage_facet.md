---
sidebar_position: 1
---

# Column Level Lineage Dataset Facet

Column level lineage provides fine grained information on datasets' dependencies. Not only we know the dependency exist, but we are also able to understand which input columns are used to produce output columns. This allows answering questions like *Which root input columns are used to construct column x?* 


Example:

```json
      "columnLineage": {
        "_producer": "https://some.producer.com/version/1.0",
        "_schemaURL": "https://openlineage.io/spec/facets/1-0-1/ColumnLineageDatasetFacet.json",
        "fields": {
          "a": {
            "inputFields": [
              {
                "namespace": "file",
                "name": "input_dataset",
                "field": "a"
              }
            ]
          },
          "b": {
            "inputFields": [
              {
                "namespace": "file",
                "name": "input_dataset",
                "field": "c"
              },
              {
                "namespace": "file",
                "name": "input_dataset",
                "field": "d"
              }
            ]
          }
        }
      }
```

The facet specification can be found [here](https://openlineage.io/spec/facets/1-0-1/ColumnLineageDatasetFacet.json).