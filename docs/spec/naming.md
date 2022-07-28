---
sidebar_position: 3
---

# Naming Conventions

:::info
This page has some initial content but is not yet complete. Contribute are welcome via the Edit link below.
:::

## Dataset Naming

| Formula                   | Examples                                  |
| ------------------------- | ----------------------------------------- |
| host + database + table   | postgres://db.foo.com/metrics.salesorders |
| bucket + path             | s3://sales-metrics/orders.csv             |
| host + port + path        | hdfs://stg.foo.com:3000/salesorders.csv   |
| project + dataset + table | bigquery:metrics.sales.orders             |

## Job Naming

| Formula                    | Examples                     |
| -------------------------- | ---------------------------- |
| namespace + name         | staging.load_orders_from_csv |
| namespace + project + name | prod.orders_etl.count_orders |

## Run Naming

Runs are named using client-generated UUIDs. The client is responsible for generating them and maintaining them throughout the duration of the runcycle.

```python
from openlineage.client.run import Run
run = Run(str(uuid4()))
```

## Why Naming Matters

![image](./naming-correlations.svg)

## Additional Resources

* [The OpenLineage Naming Spec](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md)