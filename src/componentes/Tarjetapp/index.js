import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popup from "reactjs-popup";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ExitIcon from "@material-ui/icons/Close";

export default (props) => (
  <Popup trigger={<Button className="button"> leer mas... </Button>} modal>
    {(close) => (
      <Paper className="modal">
        <IconButton aria-label="close" className="close" onClick={close}>
          <ExitIcon />
        </IconButton>

        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <img src={process.env.PUBLIC_URL + props.imagen} width="200" height="150" />{" "}
            <img src={props.imagen} width="200" height="150" />{" "}
          </Grid>
          <Typography variant="h3">{props.nombre}</Typography>
          <Typography variant="h5">Ponente: {props.ponente}</Typography>
          <Typography variant="h5" gutterBottom>
            {props.fecha}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Descripcion: {props.descripcion}
          </Typography>
        </Grid>
      </Paper>
    )}
  </Popup>
);
