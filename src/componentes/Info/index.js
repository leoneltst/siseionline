import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import styled, { css } from "styled-components";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    backgroundColor: "#008CFFEE",
    padding:"10px"
  },
}));

function Info(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="start"
        >
          <Grid item>
            <TitleStyle>{props.titulo}</TitleStyle>
            <br></br><br></br>
          </Grid>
          <Grid item>
            {" "}
            <SubtitleStyle>{props.contenido}</SubtitleStyle>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Info;
const TitleStyle = styled.span`
  font-family: Roboto;
  font-size: 20px;
  color: #fff;
  padding-bottom: 6px;
  width: 160px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
  line-height: 16px;
  opacity: 0.8;
`;
