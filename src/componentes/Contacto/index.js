import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import styled, { css } from "styled-components";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    backgroundColor: "#008CFFEE",
    padding: "10px",
    width: "400px",
  },
  margins: {
    marginBottom: "10px",
    rColor: "#000000",
    padding: "10px",
  },
  Button: {
    marginLeft: "10px",
    marginBottom:"10px",
  },
}));

function Contacto(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container direction="column" justify="Center" alignItems="Center">
        <Grid item>
          <TitleStyle>{"Contactanos"}</TitleStyle>
        </Grid>
        <Grid item>
          {" "}
          <SubtitleStyle>
            {
              "Puedes contactarnos mediante correo electronico: SiseiOnline@gmail.com o dejarnos un mensaje en el siguiente recuadro."
            }
          </SubtitleStyle>
        </Grid>
        <Grid item>
          <TextField
            className={classes.margins}
            id="outlined-basic"
            label="Correo"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.margins}
            id="outlined-multiline-static"
            label="Escribe tu mensaje"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined"className={classes.Button}>Enviar</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Contacto;
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
