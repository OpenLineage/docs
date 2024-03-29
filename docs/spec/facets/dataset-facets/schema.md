---
sidebar_position: 6
---

# Schema Dataset Facet

The schema dataset facet contains the schema of a particular dataset. 
Besides a name, it provides an optional type and description of each field.


Example:

```json
{
  ...
  "inputs": {
    "facets": {
      "schema": {
        "_producer": "https://some.producer.com/version/1.0",
        "_schemaURL": "https://openlineage.io/spec/facets/1-0-0/SchemaDatasetFacet.json",
        "fields": [
          {
            "name": "id",
            "type": "int",
            "description": "Customer's identifier"
          },
          {
            "name": "name",
            "type": "string",
            "description": "Customer's name"
          },
          {
            "name": "is_active",
            "type": "boolean",
            "description": "Has customer completed activation process"
          }
        ]
      }
    }
  }
  ...
}
```

The facet specification can be found [here](https://openlineage.io/spec/facets/1-0-0/SchemaDatasetFacet.json).