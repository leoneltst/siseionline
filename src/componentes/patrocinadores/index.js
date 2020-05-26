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
import TarjetaMin from "../TarjetaMin/min";
import Mtext from "../PlistT2/Mtext";
import { BrowserRouter as Router, Switch, Route, Link }  from "react-router-dom";
const MGridList = styled(GridList)({
  flexWrap: "nowrap",
  transform: "translateZ(0)",
  height: "120px",
  width: "1100px",
});
const Mimg = styled("img")({
  width: "100px",
  height: "100px",
  background: "#FFF",
  borderRadius: "50px",
});
const Mdiv = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflow: "hidden",
  width: "1080px",
  height: "103px",
});

const Mpaper = styled(Paper)({
  width: "1100px",
  marginBottom: "10px",
  backgroundColor: "#008CFFEE",
});

class Patrocinadores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://siseiapi20200507205513.azurewebsites.net/api/patrocinador")
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
            <Grid item key={1}>
              <Mtext text={"Patrocinadores"} /><br></br><br></br>
            </Grid>
            <Grid item key={2}>
              <Mdiv>
                <MGridList cols={10}>
                  {data &&
                    data.map((item) => (
                      <GridListTile>
                        <Mimg src={item.iconos} />
                      </GridListTile>
                    ))}
                </MGridList>
              </Mdiv>
            </Grid>
            <Grid item key={3}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item></Grid>
                <Grid item>
                <Link to="/patrocinadores">
                  <Button>Ver todos... </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Mpaper>
      );
    }
  }
}
export default Patrocinadores;
