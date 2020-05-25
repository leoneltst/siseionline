import React from "react";
import {
  styled,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Mtext from "../PlistT2/Mtext";
import TextoC from "./textosC";
import "typeface-roboto";

const Mpaper = styled(Paper)({
  background: "#004680",
  borderRadius: "10px",
  width: "400px",
  height: "180px",
});

const Mimg = styled("img")({
  margin: "10px",
  width: "120px",
  height: "160px",
  borderRadius:"5px",
});
const MGrid = styled(Grid)({
  background: "#004680",
    borderRadius:"10px",
    width: "400px",
    height: "180px",
});
function carnet(props) {
  return (
    <Mpaper elevation={3}>
      <MGrid container direction="row" justify="flex-start" alignItems="center">
      <Grid item>
          <Mimg src={props.imagen} />
        </Grid>
        <Grid item>
          <TextoC nombre={props.nombre} descripcion={props.descripcion} precio={props.precio}  />
        </Grid>
      </MGrid>
    </Mpaper>
  );
}
export default carnet;
