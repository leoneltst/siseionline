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
    width: "80%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    backgroundColor: "#008CFFEE",
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
          alignItems="center"
        >
          <Grid item>
            <TitleStyle>{props.titulo}</TitleStyle>
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
  font-size: 18px;
  color: #fff;
  padding-bottom: 6px;
  width: 160px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  opacity: 0.8;
`;
