---
sidebar_position: 3
---

# Column Level Lineage

:::info
Column level lineage for Spark is turned on by default and requires no additional work to be done. The following documentation describes its internals. 
:::


Column level lineage provides fine grained information on datasets' dependencies. Not only do we know the dependency exists, but we are also able to understand which input columns are used to produce output columns. This allows for answering questions like *Which root input columns are used to construct column x?* 

## Standard specification

Collected information is sent in OpenLineage event within `columnLineage` dataset facet described [here](spec/facets/dataset-facets/column_lineage_facet.md). 

## Code architecture and its mechanics

Column level lineage has been implemented separately from the rest of builders and visitors extracting lineage information from Spark logical plans. As a result the codebase is stored in `io.openlineage.spark3.agent.lifecycle.plan.columnLineage` package within classes responsible only for this feature.

* Class `ColumnLevelLineageUtils.java` is an entry point to run the mechanism and is used within `OpenLineageRunEventBuilder`.

* Classes `ColumnLevelLineageUtilsNonV2CatalogTest` and `ColumnLevelLineageUtilsV2CatalogTest` contain real-life test cases which run Spark jobs and get an access to the last query plan executed. They evaluate column level lineage based on the plan and expected output schema. Then, they verify if this meets the requirements. This allows testing column level lineage behavior in real scenarios. The more tests and scenarios put here, the better.

* Class `ColumnLevelLineageBuilder` is used when traversing logical plans to store all the information required to produce column lineage. It allows storing input/output columns. It also stores dependencies between the expressions contained in query plan. Once inputs, outputs and dependencies are filled, build method is used to produce output facet (`ColumnLineageDatasetFacetFields`).

* The mechanism gets output schema and logical plan as input. Output schemas are tightly coupled with root nodes of execution plans, however we do already have this information extracted within the other visitors and dataset input builders.
`OutputFieldsCollector` class is used to traverse the plan to gather the outputs. Outputs can be extracted from `Aggregate` or `Project` and each output field has its `ExprId` (expression id) attached from the plan.

* `InputFieldsCollector` class is used to collect the inputs which can be extracted from `DataSourceV2Relation`, `DataSourceV2ScanRelation`, `HiveTableRelation` or `LogicalRelation`. Each input field has its `ExprId` within the plan. Each input is identified by `DatasetIdentifier`, which means it contains name and namespace, of a dataset and an input field.

* `FieldDependenciesCollector` traverses the plan to identify dependencies between different `ExprId`. Dependencies map parent expressions to children expressions'. This is used to identify inputs used to evaluate certain output.

## Writing custom extensions

Spark framework is known for its great ability to be extended by custom libraries capable of reading or writing to anything. In case of having a custom implementation, we prepared an ability to extend column lineage implementation to be able to retrieve information from other input or output LogicalPlan nodes. 

Creating such an extension requires implementing a following interface: 

```
/** Interface for implementing custom collectors of column level lineage. */
interface CustomColumnLineageVisitor {

  /**
   * Collect inputs for a given {@link LogicalPlan}. Column level lineage mechanism traverses
   * LogicalPlan on its node. This method will be called for each traversed node. Input information
   * should be put into builder.
   *
   * @param node
   * @param builder
   */
  void collectInputs(LogicalPlan node, ColumnLevelLineageBuilder builder);

  /**
   * Collect outputs for a given {@link LogicalPlan}. Column level lineage mechanism traverses
   * LogicalPlan on its node. This method will be called for each traversed node. Output information
   * should be put into builder.
   *
   * @param node
   * @param builder
   */
  void collectOutputs(LogicalPlan node, ColumnLevelLineageBuilder builder);

  /**
   * Collect expressions for a given {@link LogicalPlan}. Column level lineage mechanism traverses
   * LogicalPlan on its node. This method will be called for each traversed node. Expression
   * dependency information should be put into builder.
   *
   * @param node
   * @param builder
   */
  void collectExpressionDependencies(LogicalPlan node, ColumnLevelLineageBuilder builder);
}
```
and making it available for Service Loader (implementation class name has to be put in a resource file `META-INF/services/io.openlineage.spark3.agent.lifecycle.plan.column.CustomColumnLineageVisitor`).


## Future work

Current version of the mechanism allows finding input fields that were used to produce the output field but does not determine how were they used. This simplification allowed us to built column lineage feature at the minimum amount of code written. Given an incredible amount of Spark's functions, operators and expressions, our implementation needs just to know it was `UnaryOperator`, `BinaryOperator`, etc. without a requirement to understand the operation it performs. This approach still has some room for extensions like:
 * Being able to find out if an output field is a simple copy of input one or some modification has been applied.
 * Assume there exist a mechanism within an organisation to blur personal data. Be able to extract information if the output still contains personal data or it got blurred.

