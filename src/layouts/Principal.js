import React from "react";
import Appbar from "../componentes/Appbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Logo from "../asets/Logo-Contornos.png";
import Info from "../componentes/Info/";
import BackgroundSlider from "react-background-slider";
import image1 from "../asets/image1.jpg";
import image2 from "../asets/image2.jpg";

import Contacto from "../componentes/Contacto/";
import PlistT2 from "../componentes/PlistT2/";
import PlistC from "../componentes/PlistC/";
import PlistCarnet from "../componentes/PlistCarnet/";
import Patrocinadores from "../componentes/patrocinadores/";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginLeft: "10%",
    width: "80%",
  },
  divP: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "1100px",
    height: "50px",
  },
  glP: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  patrocinadores: {
    width: "50px",
    height: "50px",
  },

  paper: {
    width: "100%",

    marginBottom: "10px",
    backgroundColor: "#008CFFEE",
  },
}));

export default function Principal() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item key={1}>
          <Info
            titulo={"Quienes somos"}
            contenido={
              "SISeI es un simposio con más de una década de trayectoria, organizado por un comité de estudiantes pertenecientes al Insitituto Tecnlógico de México campus Culiacán y orientado a todas esas personas como tú, apasionadas por aprender cosas nuevas, interesantes y que aporten a tu perfil profesional. Somos un simposio con el afán de reunir las mejores y más relevantes conferencias de las ciencias y tecnologías, así como talleres que complementan el contenido de este macro evento. Abarcando una amplia gama de temáticas, buscamos que obtengas satisfacción por el conocimiento ofrecido para ti, nuestro asistente."
            }
          />
        </Grid>
        <Grid item key={2}>
          <PlistC />{" "}
        </Grid>
        <Grid item key={3}>
          <PlistT2 />{" "}
        </Grid>
        <Grid item key={5}>
          <PlistCarnet />{" "}
        </Grid>
        <Grid item key={6}>
          <Contacto />{" "}
        </Grid><Grid item key={10}>
          <Patrocinadores />{" "}
        </Grid>
        <Grid item key={4}>
          <div className={classes.divP}>
            <GridList className={classes.glP} cols={15}>
              {tileData.map((tile) => (
                <GridListTile>
                  <img src={tile.img} className={classes.patrocinadores} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const tileData = [
  {
    img: "/patrocinadores/L (1).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (2).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (3).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (4).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (5).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (6).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (7).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (8).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (9).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (10).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (11).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (12).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (13).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (14).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (15).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (16).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (17).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (18).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (19).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (20).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (21).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (22).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (23).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (24).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (25).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (26).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (27).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (28).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (29).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (30).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (31).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (32).png",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (1).jpg",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (2).jpg",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (3).jpg",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (4).jpg",
    link: "Aprendiendo",
  },
  {
    img: "/patrocinadores/L (5).jpg",
    link: "Aprendiendo",
  },
];
