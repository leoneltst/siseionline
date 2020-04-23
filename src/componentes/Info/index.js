import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
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
          SISeI_Descripcion(edition)
        </Typography>
        <Typography variant="body1">Sunt enim anim nisi mollit mollit magna sunt cillum consequat. Cupidatat
        voluptate veniam ut nulla tempor nostrud. Dolore veniam reprehenderit
        consectetur non voluptate exercitation mollit pariatur. Id laborum
        voluptate officia labore consequat excepteur ut magna dolore quis. Et
        esse velit et irure fugiat dolor elit qui eu id labore. Qui amet
        deserunt quis esse velit magna excepteur irure laboris adipisicing
        cupidatat officia exercitation duis.</Typography>
        </Grid>
      </Paper>
  );
}
export default Info;
