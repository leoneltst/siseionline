import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styled, { css } from "styled-components";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#004680",
    borderRadius:"10px",
    width: "250px",
    height: "120px",
  },

  imagen: {
    width: "75px",
    height: "100px",
    marginRight:"10px",
    marginLeft:"10px",
    borderRadius:"5px",
  }, 

}));

function TarjetaMin(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
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
            
          >
            <Grid item>
              <TitleStyle>{props.nombre}</TitleStyle>
            </Grid>
            <Grid item>
              <SubtitleStyle>{props.ponente}</SubtitleStyle>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
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
export default TarjetaMin;
