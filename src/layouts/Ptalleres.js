import React, { useEffect, useState } from "react";
import {
  styled,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import "typeface-roboto";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import MiniTarjeta from "../componentes/MiniTarjeta/";
import Mtext from "../componentes/PlistT2/Mtext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MGridList = styled(GridList)({
  flexWrap: "wrap",
  paddingLeft: "15px",
  height: "auto",
});
const Mpaper = styled(Paper)({
  width: "1100px",
  height: "550px",
  margin: "10px",
  backgroundColor: "#008CFFEE",
});
const Mdiv = styled("div")({
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflow: "hidden",
  width: "1100px",
  height: "510px",
});

class Ptalleres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://siseiapi20200507205513.azurewebsites.net/api/taller")
      .then(function (response) {
        return response.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });

          console.log(error);
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Mpaper elevation={3}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <br/><br/>
            <Grid item key={2}>
              <Mdiv>
                <MGridList cols={4}>
                  {data &&
                    data.map((item) => (
                      <GridListTile key={item.Id}>
                        <MiniTarjeta
                          nombre={item.nombre}
                          ponente={item.nombreTallerista}
                          imagen={item.urlImagen}
                          requisitoAlumno={item.requisitoAlumno}
                          descripcion={item.descripcion}
                        />
                      </GridListTile>
                    ))}
                </MGridList>
              </Mdiv>
            </Grid>

            
          </Grid>
        </Mpaper>
      );
    }
  }
}
export default Ptalleres;
