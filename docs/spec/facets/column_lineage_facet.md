---
sidebar_position: 2
---

# Column Level Lineage Facet

Column level lineage provides fine grained information on datasets' dependencies. Not only we know the dependency exist, but we are also able to understand which input columns are used to produce output columns. This allows answering questions like *Which root input columns are used to construct column x?* 


```json
      "columnLineage": {
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

Facet specification can be found [here](https://github.com/OpenLineage/OpenLineage/blob/main/spec/facets/ColumnLineageDatasetFacet.json).