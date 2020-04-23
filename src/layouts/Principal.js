import React from "react";
import Appbar from "../componentes/Appbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Logo from "../asets/Logo-Contornos.png";
import QuienesSomos from "../componentes/QuienesSomos";
import Info from"../componentes/Info/";
import BackgroundSlider from "react-background-slider";
import image1 from "../asets/image1.jpg";
import image2 from "../asets/image2.jpg";

export default function Principal() {
  return (
    <div>
      <BackgroundSlider
        images={[image1, image2]}
        duration={10}
        transition={2}
      />

      <Appbar />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Info />
        </Grid>
        <Grid item>
          <QuienesSomos />
        </Grid>
        <Grid item>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </div>
  );
}
