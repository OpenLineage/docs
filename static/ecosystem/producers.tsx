import { Partner } from "@site/static/ecosystem/consumers";

export const Producers: Array<Partner> = [
    {
        image: "airflow_logo_bkgd_2.svg",
        org: "Airflow",
        description: "A library integrates DAGs for automatic metadata collection.",
        docs_url: "https://github.com/OpenLineage/OpenLineage/blob/main/integration/airflow",
        org_url: "https://airflow.apache.org"
    },
    {
        image: "dagster_logo_lg.svg",
        org: "Dagster",
        description: "A library converts Dagster events to OpenLineage events and emits them to an OpenLineage backend.",
        docs_url: "https://dagster.io",
        org_url: "https://dagster.io"
    },
    {
        image: "dbt_logo_bkgd_2.svg",
        org: "dbt",
        description: "A wrapper script uses the OpenLineage client for automatic collection of metadata from dbt.",
        docs_url: "https://www.getdbt.com",
        org_url: "https://www.getdbt.com"
    },
    {
        image: "egeria_logo_lg.svg",
        org: "Egeria",
        description: "Egeria's OpenLineage integration publishes events to lineage integration connectors with OpenLineage listeners registered in the same instance of the Lineage Integrator OMIS.",
        docs_url: "https://egeria-project.org/features/lineage-management/overview/#the-openlineage-standard",
        org_url: "https://egeria-project.org"
    },
    {
        image: "flink_logo.svg",
        org: "Flink",
        description: "The OpenLineage Flink Agent uses jvm instrumentation to emit OpenLineage metadata.",
        docs_url: "https://flink.apache.org",
        org_url: "https://flink.apache.org"
    },
    {
        image: "google_logo.svg",
        org: "Google",
        description: "Dataproc captures lineage events from Spark jobs and publishes them to the Dataplex Data Lineage API, which also accepts OpenLineage events using the `ProcessOpenLineageRunEvent` REST API method.",
        docs_url: "https://cloud.google.com/data-catalog/docs/reference/data-lineage/rest",
        org_url: "https://cloud.google.com"
    },
    {
        image: "GE_logo.svg",
        org: "Great Expectations",
        description: "The `OpenLineageValidationAction` collects dataset metadata from the Great Expectations `ValidationAction`.",
        docs_url: "https://greatexpectations.io",
        org_url: "https://greatexpectations.io"
    },
    {
        image: "keboola_logo_lg.svg",
        org: "Keboola",
        description: "Keboola's OpenLineage integration automatically pushes all job information to an OpenLineage-compatible API endpoint.",
        docs_url: "https://docs.google.com/presentation/d/e/2PACX-1vTCfQcWUM_9e-lNlBqtaWLPjQ7ihvwHPjq0sJ47eJjjc0zNoLXlWOdcznE90t6IVNGBWFwGZBoU-d-o/pub?start=true&loop=true&delayms=3000&slide=id.g136261d2e68_0_1",
        org_url: "https://www.keboola.com"
    },
    {
        image: "spark_logo.svg",
        org: "Spark",
        description: "The OpenLineage Spark Agent uses jvm instrumentation to emit OpenLineage metadata.",
        docs_url: "https://spark.apache.org",
        org_url: "https://spark.apache.org"
    }
]
