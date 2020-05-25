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


const MGrid = styled(Grid)({
  background: "#004680",
  borderRadius: "10px",
  width: "220px",
  height: "180px",
});
function textosC(props) {
  return (
    <MGrid
      container
      direction="column"
      justify="space-evenly"
      alignItems="flex-start"
    >
      <Grid item>
        <Mtext tipo={"1"} text={props.nombre} />
      </Grid>
      <Grid item>
        <Mtext tipo={"2"} text={props.descripcion} />
      </Grid>
      <Grid item>
        <Mtext tipo={"3"} text={"precio: $"+props.precio} />
      </Grid>
    </MGrid>
  );
}
export default textosC;
