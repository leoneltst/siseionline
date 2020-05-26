import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import styled, { css } from "styled-components";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#004680",
    borderRadius:"10px",
    width: "100%",
    height: "320px",
  },

  imagen: {
    width: "225px",
    height: "300px",
    marginRight:"10px",
    marginLeft:"10px",
    borderRadius:"5px",
  }, 

  MGrid:{
    width: "300px",
    height: "300px",
    marginLeft:"10px",
  },
}));

function TarjetaPop(props) {
  const classes = useStyles();
  return (
    <Popup trigger={<Button className="button"> leer mas... </Button>} modal>
    {(close) => (
    <Paper  elevation={3}>
      <Grid 
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <img src={props.imagen} className={classes.imagen}></img>
        </Grid>
        <Grid item>
          <Grid 
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
            className={classes.MGrid}
          >
            <Grid item>
              <TitleStyle>{props.nombre}</TitleStyle>
            </Grid>
            <Grid item>
              <SubtitleStyle>{props.ponente}</SubtitleStyle>
            </Grid>
            <Grid item>
              <SubtitleStyle>{props.descripcion}</SubtitleStyle>
            </Grid>
            <Grid item>
              <SubtitleStyle>{"Requisitos previos: "+props.requisitoAlumno}</SubtitleStyle>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

)}
</Popup>
  );
}
const TitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #fff;
  padding-bottom: 6px;
  width: 160px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  opacity: 0.5;
`;
export default TarjetaPop;
