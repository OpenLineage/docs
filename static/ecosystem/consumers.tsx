let Partner: Array<string> = [];

export const Consumers: Array<typeof Partner> = [
    [  
      "amundsen_logo.svg",
      "Amundsen",
      "The OpenLineageTableLineageExtractor extracts table lineage information from OpenLineage events.",
      "https://www.amundsen.io/amundsen/databuilder/#openlineagetablelineageextractor"
    ],
    [
      "astronomer_logo.svg",
      "Astronomer",
      "Astronomer's Astro uses the openlineage-airflow library to extract lineage from Airflow tasks and stores that data in the Astro control plane. The Astronomer UI then renders a graph and list of all tasks and datasets that include OpenLineage data.",
      "https://www.astronomer.io/product/"
    ],
    [
      "atlan_logo.svg",
      "Atlan",
      "Atlan's OpenLineage integration uses job facets to catalog operational metadata from pipelines, enrich existing assets, and provide persona-based lineage information using OpenLineage SDKs.",
      "https://atlan.com/?utm_source=partner&utm_medium=referral&utm_campaign=OpenLineage"
    ],
    [
      "egeria_logo_lg.svg",
      "Egeria",
      "Egeria's OpenLineage integration can capture OpenLineage events directly via HTTP or the proxy backend.",
      "https://egeria-project.org/features/lineage-management/overview/#the-openlineage-standard"
    ],
    [
      "google_logo.svg",
      "Google Cloud",
      "The Google Cloud Data Catalog supports importing OpenLineage events through the Data Lineage API to display in the Dataplex UI alongside lineage information from Google Cloud services including Dataproc.",
      "https://cloud.google.com/data-catalog/docs/how-to/open-lineage"
    ],
    [
      "grai_logo.svg",
      "Grai",
      "The Grai integration makes OpenLineage metadata from various systems available via an OpenLineage-compatible endpoint and a standalone Python library.",
      "https://docs.grai.io/integrations/openlineage"
    ],
    [
        "manta_logo_bkgd.svg",
        "Manta",
        "Manta's OpenLineage Scanner uses job facets to ingest OpenLineage metadata and enrich overall enterprise data pipeline analysis.",
        "https://getmanta.com/?utm_source=partner&utm_medium=referral&utm_campaign=OpenLineage"
    ],
    [
        "mqz_logo.svg",
        "Marquez",
        ">Marquezis a metadata server offering an OpenLineage-compatible endpoint for real-time collection of information about running jobs and applications.",
        "https://marquezproject.ai"
    ],
    [
        "metaphor_logo.svg",
        "Metaphor",
        "Metaphor's HTTP endpoint processes OpenLineage events and extracts lineage, data quality metadata, and job facets to enable data governance and data enablement across an organization.",
        "https://metaphor.io/"
    ],
    [
        "ms_logo.svg",
        "Microsoft",
        "As Airflow DAGs run, Azure Event Hubs collect OpenLineage events for parsing and ingestion by Microsoft Purview, which also ingests events from Spark operations in Azure Databricks via the Azure Databricks to Purview Lineage Connector.",
        "https://learn.microsoft.com/en-us/purview/how-to-lineage-airflow"
    ],
    [
        "snowflake_logo.svg",
        "Snowflake",
        "Snowflake's OpenLineage Adapter creates an account-scoped view from ACCESS_HISTORY and QUERY_HISTORY to output each query that accesses tables in OpenLineage JsonSchema specification.",
        "https://github.com/Snowflake-Labs/OpenLineage-AccessHistory-Setup"
    ]
]
