---
sidebar_position: 1
---

# Dataset Facets

Dataset Facets are generally consisted of common facet that is used both in `inputs` and `outputs` of the OpenLineage event. There are facets that exist specifically for input or output datasets also.

## Input Dataset Facets
- **dataQualityMetrics**: Captures dataset level and column level data quality metrics when scanning a dataset whith a DataQuality library (row count, byte size, null count, distinct count, average, min, max, quantiles).

- **dataQualityAssertions**: Captures the result of running data tests on dataset or its columns.

## Output Dataset Facets
- **outputStatistics**: Captures the size of the output written to a dataset (row count and byte size).