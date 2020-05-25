import React, { useEffect, useState } from "react";
import { styled ,createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import "typeface-roboto";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import TarjetaMin from "../TarjetaMin/min";

import Mtext from "../PlistT2/Mtext";



const MGridList = styled(GridList)({
  flexWrap: "nowrap",
  transform: "translateZ(0)",
  
  paddingLeft:"15px",
});
const Mpaper = styled(Paper)({
  width: "100%",
  marginBottom: "10px",
  backgroundColor: "#008CFFEE",
});
const Mdiv = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflow: "hidden",
  width: "1100px",
  height: "130px",
});

class PlistT2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://siseiapi20200507205513.azurewebsites.net/api/conferencia")
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
          <Grid>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item key={1}>
                <Mtext text={"Conferencias"}/>
              </Grid>
              <Grid item key={2}>
                <Mdiv>
                  <MGridList cols={4}>
                    {data &&
                      data.map((item) => (
                        <GridListTile key={item.Id}>
                          <TarjetaMin
                            nombre={item.nombre}
                            ponente={item.nombreConferencista}
                            imagen={item.url}
                          />
                        </GridListTile>
                      ))}
                  </MGridList>
                </Mdiv>
              </Grid>

              <Grid item key={3}>
                <Button>Ver todos... </Button>
              </Grid>
            </Grid>
          </Grid>
        </Mpaper>
      );
    }
  }
}
export default PlistT2;
