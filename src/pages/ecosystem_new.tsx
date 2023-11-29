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
import { Consumers } from "@site/static/ecosystem/consumers";
import { Producers } from "@site/static/ecosystem/producers";

let Partner: Array<string> = [];

const LogoCard = ( partner: typeof Partner ) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 375 }}>
      <CardMedia
        sx={{ maxHeight: 140 }}
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
      <CardActions disableSpacing>
        <Button size="small" href={partner[3]}>Learn More</Button>
      </CardActions>
    </Card>
  )
}

const FillGrid = ( partners: Array<typeof Partner> ) => {
  return (
    <Grid container rowSpacing={4} columnSpacing={4} justifyContent="center">
      {partners.map(partner => 
        <Grid>
          {LogoCard(partner)}
        </Grid>
      )}
    </Grid>
  )
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
      <div>
        {FillGrid(Consumers)}
      </div>
      <div className="title pt-12 pb-8 text-center">
        <h3 className="text-4xl text-color-1">
          Producers
        </h3>
      </div>
      <div>
        {FillGrid(Producers)}
      </div>
      <div className="bg-bg">
        <Footer />
      </div>
    </Layout>
  )
}
