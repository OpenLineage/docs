let Partner: Array<string> = [];

export const Producers: Array<typeof Partner> = [
    [
        "airflow_logo_bkgd_2.svg",
        "Airflow",
        "A library integrates DAGs for automatic metadata collection.",
        "https://github.com/OpenLineage/OpenLineage/blob/main/integration/airflow"
    ],
    [
        "dagster_logo_lg.svg",
        "Dagster",
        "A library converts Dagster events to OpenLineage events and emits them to an OpenLineage backend.",
        "https://dagster.io/"
    ],
    [
        "dbt_logo_bkgd_2.svg",
        "dbt",
        "A wrapper script uses the OpenLineage client for automatic collection of metadata from dbt.",
        "https://www.getdbt.com"
    ],
    [
        "egeria_logo_lg.svg",
        "Egeria",
        "Egeria's OpenLineage integration publishes events to lineage integration connectors with OpenLineage listeners registered in the same instance of the Lineage Integrator OMIS.",
        "https://egeria-project.org/features/lineage-management/overview/#the-openlineage-standard"
    ],
    [
        "flink_logo.svg",
        "Flink",
        "The OpenLineage Flink Agent uses jvm instrumentation to emit OpenLineage metadata.",
        "https://flink.apache.org"
    ],
    [
        "google_logo.svg",
        "Google",
        "Dataproc captures lineage events from Spark jobs and publishes them to the Dataplex Data Lineage API, which also accepts OpenLineage events using the `ProcessOpenLineageRunEvent` REST API method.",
        "https://cloud.google.com/data-catalog/docs/reference/data-lineage/rest"
    ],
    [
        "GE_logo.svg",
        "Great Expectations",
        "The `OpenLineageValidationAction` collects dataset metadata from the Great Expectations `ValidationAction`.",
        "https://greatexpectations.io"
    ],
    [
        "keboola_logo_lg.svg",
        "Keboola",
        "Keboola's OpenLineage integration automatically pushes all job information to an OpenLineage-compatible API endpoint.",
        "https://docs.google.com/presentation/d/e/2PACX-1vTCfQcWUM_9e-lNlBqtaWLPjQ7ihvwHPjq0sJ47eJjjc0zNoLXlWOdcznE90t6IVNGBWFwGZBoU-d-o/pub?start=true&loop=true&delayms=3000&slide=id.g136261d2e68_0_1"
    ],
    [
        "spark_logo.svg",
        "Spark",
        "The OpenLineage Spark Agent uses jvm instrumentation to emit OpenLineage metadata.",
        "https://spark.apache.org"
    ]
]
