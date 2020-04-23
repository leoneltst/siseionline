import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../asets/Logo-Blanco.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#004680"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Button color="inherit" style={{ marginLeft: "33px", marginRight: "10px"}}>
            <img src={Logo} height="60px" />
          </Button>
          <Typography variant="h6" className={classes.title}>
            SISeI: Hacking views
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
