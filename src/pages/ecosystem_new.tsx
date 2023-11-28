import React, {} from "react";
import Footer from "../components/footer";
import Layout from '@theme/Layout';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

let Partner: Array<string | any> = [];

export const Consumers: Array<typeof Partner> = [
  [
    "astronomer_logo.svg",
    "Astronomer",
    "Astronomer's Astro uses the openlineage-airflow library to extract lineage from Airflow tasks and stores that data in the Astro control plane. The Astronomer UI then renders a graph and list of all tasks and datasets that include OpenLineage data.",
    "https://www.astronomer.io/product/"
  ],
  [  
    "amundsen_logo.svg",
    "Amundsen",
    "The OpenLineageTableLineageExtractor extracts table lineage information from OpenLineage events.",
    "https://www.amundsen.io/amundsen/databuilder/#openlineagetablelineageextractor"
  ],
  [
    "atlan_logo.svg",
    "Atlan",
    "Atlan's OpenLineage integration uses job facets to catalog operational metadata from pipelines, enrich existing assets, and provide persona-based lineage information using OpenLineage SDKs.",
    "https://atlan.com/?utm_source=partner&utm_medium=referral&utm_campaign=OpenLineage"
  ]
]
  
export const Producers: Array<typeof Partner> = []

const LogoCard = ( partner: typeof Partner ) => {
  return (
    <Card sx={{ maxWidth: 345, marginX: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        src={require(`@site/static/img/${partner[0]}`).default}
        title={partner[1]}
      />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {partner[1]}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {partner[2]}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={partner[3]}>Learn More</Button>
    </CardActions>
    </Card>
  )
}

const FillGrid = ( partners: Array<typeof Partner> ) => {
  return (
    <Grid container spacing={2}>
      {partners.map(partner => LogoCard(partner))}
    </Grid>
  )
}

export const ConsumerGrid = () => {
  return (FillGrid(Consumers));
}

export const ProducerGrid = () => {
  return (FillGrid(Producers));
}


export default function Ecosystem(): JSX.Element {
  const seoTitle = 'Ecosystem';
  const seoDescription = '';

  return (
    <Layout title={seoTitle} description={seoDescription}>
      <div className="title pt-4 text-center lg:py-14 lg:px-0">
        <h2 className="text-5xl text-color-1">
          Ecosystem
        </h2>
      </div>
      <div className="title pb-8 text-center">
        <h3 className="text-4xl text-color-1">
          Consumers
        </h3>
      </div>
      <div className="mx-auto">
        <ConsumerGrid />
      </div>
      <div className="title pt-12 text-center">
        <h3 className="text-4xl text-color-1">
          Producers
        </h3>
      </div>
      <div>
        <ProducerGrid />
      </div>
      <div className="bg-bg">
        <Footer />
      </div>
    </Layout>
  )
}
