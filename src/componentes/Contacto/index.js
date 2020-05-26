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
    marginTop: "8px",
    backgroundColor: "#008CFFCC",
    width: "1100px",
    height: "250px",
  },
  margins: {
    margin: "10px",
    
  },
  Button: {
    marginLeft: "10px",
    marginBottom: "10px",
  },
  TextField:{
    margin: "5px",
    
    backgroundColor: "#FFF",
  }
}));

function Contacto(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root  }>
      <Grid className={classes.margins}
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid item>
              <TitleStyle>{"Informacion"}</TitleStyle><br></br><br></br>
            </Grid>
            <Grid item>
              <SubtitleStyle>
                {
                  "Para más información no dudes en buscarnos en nuestro local físicamente "
                }
              </SubtitleStyle>
            </Grid>
            <Grid item>
              <SubtitleStyle>
                {
                  "en el Tecnológico de culiacan, en el área de sistemas, en la planta baja del edificio B."
                }
              </SubtitleStyle>
            </Grid>
            <Grid item>
              <SubtitleStyle>
                {
                  "O bien contáctanos por cualquiera de nuestros medios de difusión o correo electrónico."
                }
              </SubtitleStyle>
            </Grid>
            <Grid item>
              <SubtitleStyle>
                {"Correo Electronico: SiseiOnline@gmail.com"}
              </SubtitleStyle>
            </Grid>
            <Grid item>
              <TitleStyle>{"Siguenos en:"}</TitleStyle>
            </Grid>
            <Grid item>
              <img
                width="50"
                height="50"
                src={
                  "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2-1.png"
                }
              />
              <img
                width="50"
                height="50"
                src={
                  "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202090instagramlogosocialsocialmedia-115598_115703.png"
                }
              />
              <img
                width="50"
                height="50"
                src={
                  "https://blog.expansive.mx/wp-content/uploads/2017/11/twitter-logo.png"
                }
              />
              <img
                width="50"
                height="50"
                src={
                  "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1-1.png"
                }
              />
              <img
                width="50"
                height="50"
                src={
                  "https://seeklogo.com/images/T/twitch-tv-logo-51C922E0F0-seeklogo.com.png"
                }
              />
            </Grid>

            <Grid item>
              <SubtitleStyle>
                {"© 2016 - 2020 SiseiOnline.com - All Rights Reserved."}
              </SubtitleStyle>
            </Grid>
            
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="Center"
            alignItems="Center"
          >
            <Grid item>
              <TitleStyle>{"Contactanos"}</TitleStyle>
            </Grid>

            <Grid item>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="Correo"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <TextField
                className={classes.TextField}
                id="outlined-multiline-static"
                label="Escribe tu mensaje"
                multiline
                rows={2}
                variant="filled"
              />
            </Grid>
            <Grid item>
              <Button variant="filled" className={classes.Button , classes.TextField}>
                Enviar
              </Button>
            </Grid>
          </Grid>
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
