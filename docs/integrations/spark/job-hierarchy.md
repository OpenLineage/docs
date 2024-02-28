---
sidebar_position: 6
title: Job Hierarchy
---

## Job Hierarchy

In contrast to some other systems, Spark's job hierarchy is more opaque. 
While you might schedule "Spark jobs" through code or notebooks, these represent an entirely different concept than what Spark sees internally.
For Spark, the true job is an action, a single computation unit initiated by the driver.
These actions materialize data only when you, the user, instruct them to write to a data sink or visualize it.
This means what you perceive as a single job can, in reality, be multiple execution units within Spark.
OpenLineage follows Spark execution model, and emits START/COMPLETE (and RUNNING) events
for each action. However, those are not the only events we emit.

Recognizing the disconnect between your understanding and Spark's internal workings, 
OpenLineage introduces application-level events that mark the start and end of a Spark application.
Each action-level run then points its ParentRunFacet to the corresponding Spark application run, providing a complete picture of the lineage.