import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    backgroundColor: '#008CFFDD',
  },

}));

function Info(props) {
  const classes = useStyles();
  return (
      <Paper elevation={3}className={classes.root}>
        <Grid>
        <Typography variant="h3" component="h3">
          {props.titulo}
        </Typography>
        <Typography variant="body1"> {props.contenido}</Typography>
        </Grid>
      </Paper>
  );
}
export default Info;
