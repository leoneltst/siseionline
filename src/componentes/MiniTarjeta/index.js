import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Grid from "@material-ui/core/Grid";
import Tarjetapp from "../Tarjetapp/";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "10%",
    maxWidth: "12%",
    Height: "38%",
    backgroundColor: "#20ACFFDD",
    margin: "1%",
    justifyContent: "center",
  },
  media: {
    margin: "5%",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 2,
    alignSelf: "flex-end",
  },
}));
const theme = createMuiTheme();

theme.typography.body2 = {
  fontSize: 12,
};

function MiniTarjeta(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container direction="column" justify="space-between">
        <Grid item>
          <img
            src={props.imagen}
            width="90%"
            height="75"
            className={classes.media}
          />{" "}
        </Grid>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Typography variant="body2" className={classes.typography}>
              {props.nombre}
            </Typography>
            <Typography variant="body2">{props.ponente}</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <Tarjetapp
            className={classes.bottom}
            nombre={props.nombre}
            ponente={props.ponente}
            fecha={props.fecha}
            descripcion={props.descripcion}
            imagen={props.imagen}
          />
        </Grid>{" "}
      </Grid>
    </Paper>
  );
}
export default MiniTarjeta;
