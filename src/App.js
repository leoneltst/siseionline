import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Appbar from "./componentes/Appbar";
import Principal from "./layouts/Principal";
import Ptalleres from "./layouts/Ptalleres";
import Pconferencias from "./layouts/Pconferencias";
import Pcarnets from "./layouts/Pcarnets";
import Ppatrocinadores from "./layouts/Ppatrocinadores";

import { makeStyles } from "@material-ui/core/styles";
import Info from "./componentes/Info";
import Grid from "@material-ui/core/Grid";
import Contacto from "./componentes/Contacto";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginLeft: "10%",
    width: "1100px",
  },
  contacto: {
    marginLeft: "10%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Appbar />

      <Switch>
        <Route path="/" exact>
          <Principal />
        </Route>
        <Route path="/inicio" exact>
          <Principal />
        </Route>
        <Route path="/talleres" exact>
          <div className={classes.root}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item key={1}>
                <Info
                  titulo={"Talleres"}
                  contenido={
                    "SISeI es un simposio con más de una década de trayectoria, organizado por un comité de estudiantes pertenecientes al Insitituto Tecnlógico de México campus Culiacán y orientado a todas esas personas como tú, apasionadas por aprender cosas nuevas, interesantes y que aporten a tu perfil profesional. Somos un simposio con el afán de reunir las mejores y más relevantes conferencias de las ciencias y tecnologías, así como talleres que complementan el contenido de este macro evento. Abarcando una amplia gama de temáticas, buscamos que obtengas satisfacción por el conocimiento ofrecido para ti, nuestro asistente."
                  }
                />
              </Grid>
              <Grid item key={2}>
                <Ptalleres />
              </Grid>
            </Grid>
          </div>
        </Route>
        <Route path="/conferencias" exact>
          <div className={classes.root}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item key={1}>
                <Info
                  titulo={"Conferencias"}
                  contenido={
                    "SISeI es un simposio con más de una década de trayectoria, organizado por un comité de estudiantes pertenecientes al Insitituto Tecnlógico de México campus Culiacán y orientado a todas esas personas como tú, apasionadas por aprender cosas nuevas, interesantes y que aporten a tu perfil profesional. Somos un simposio con el afán de reunir las mejores y más relevantes conferencias de las ciencias y tecnologías, así como talleres que complementan el contenido de este macro evento. Abarcando una amplia gama de temáticas, buscamos que obtengas satisfacción por el conocimiento ofrecido para ti, nuestro asistente."
                  }
                />
              </Grid>
              <Grid item key={2}>
                <Pconferencias />
              </Grid>
            </Grid>
          </div>
        </Route>
        <Route path="/carnets" exact>
          <div className={classes.root}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item key={1}>
                <Info
                  titulo={"Carnets"}
                  contenido={
                    "SISeI es un simposio con más de una década de trayectoria, organizado por un comité de estudiantes pertenecientes al Insitituto Tecnlógico de México campus Culiacán y orientado a todas esas personas como tú, apasionadas por aprender cosas nuevas, interesantes y que aporten a tu perfil profesional. Somos un simposio con el afán de reunir las mejores y más relevantes conferencias de las ciencias y tecnologías, así como talleres que complementan el contenido de este macro evento. Abarcando una amplia gama de temáticas, buscamos que obtengas satisfacción por el conocimiento ofrecido para ti, nuestro asistente."
                  }
                />
              </Grid>
              <Grid item key={2}>
                <Pcarnets />
              </Grid>
            </Grid>
          </div>
        </Route>
        <Route path="/patrocinadores" exact>
          <div className={classes.root}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              <Grid item key={1}>
                <Info
                  titulo={"patrocinadores"}
                  contenido={
                    "SISeI es un simposio con más de una década de trayectoria, organizado por un comité de estudiantes pertenecientes al Insitituto Tecnlógico de México campus Culiacán y orientado a todas esas personas como tú, apasionadas por aprender cosas nuevas, interesantes y que aporten a tu perfil profesional. Somos un simposio con el afán de reunir las mejores y más relevantes conferencias de las ciencias y tecnologías, así como talleres que complementan el contenido de este macro evento. Abarcando una amplia gama de temáticas, buscamos que obtengas satisfacción por el conocimiento ofrecido para ti, nuestro asistente."
                  }
                />
              </Grid>
              <Grid item key={2}>
                <Ppatrocinadores />
              </Grid>
            </Grid>
          </div>
        </Route>
      </Switch>
      <div className={classes.root}>
        <Contacto />
      </div>
    </Router>
  );
}

export default App;
