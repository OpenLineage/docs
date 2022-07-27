## OpenLineage integration with Airflow to extract lineage manually in absence of extractors

Airflow allows operators to track lineage by specifying the input and outputs of the operators via inlets and outlets. 
OpenLineage tries to find the input and output datasets of the Airflow job via provided extractors or custom extractors. 
If it fails to find any input or output datasets, then OpenLineage defaults to inlets and outlets of Airflow jobs. 
