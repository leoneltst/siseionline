import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import styled, { css } from "styled-components";
import "typeface-roboto";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import TarjetaMin from "../TarjetaMin/";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    marginBottom: "10px",
    backgroundColor: "#008CFFEE",
  },

  griddiv: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: "1100px",
    height:"130px"
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },

}));

function PlistT(props) {
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
            <TitleStyle>Talleres</TitleStyle>
          </Grid>
          <Grid item>
            <div className={classes.griddiv}>
              <GridList className={classes.gridList} cols={6}>
                {tileData.map((tile) => (
                  <GridListTile>
                    
                          <TarjetaMin
                            nombre={tile.nombre}
                            ponente={tile.ponente}
                            fecha={tile.fecha}
                            descripcion={tile.descripcion}
                            imagen={tile.img}
                          />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>

          <Grid item>
            <Button>Ver todos... </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PlistT;
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

const tileData = [
    {
      img: "/talleres/cpp.png",
      nombre: "Aprendiendo C++",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/android.png",
      nombre: "Android avanzado",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/react.png",
      nombre: "React para novatos",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/ia.png",
      nombre: "IA aplicada a imagenes",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/unity.png",
      nombre: "Unity3d",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/vjyn.jpg",
      nombre: "Videojuegos y negocios",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: "/talleres/cpp.png",
      nombre: "Aprendiendo C++",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/android.png",
      nombre: "Android avanzado",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/react.png",
      nombre: "React para novatos",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/ia.png",
      nombre: "IA aplicada a imagenes",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/unity.png",
      nombre: "Unity3d",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/vjyn.jpg",
      nombre: "Videojuegos y negocios",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: "/talleres/cpp.png",
      nombre: "Aprendiendo C++",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/android.png",
      nombre: "Android avanzado",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/react.png",
      nombre: "React para novatos",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/ia.png",
      nombre: "IA aplicada a imagenes",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/unity.png",
      nombre: "Unity3d",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/vjyn.jpg",
      nombre: "Videojuegos y negocios",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: "/talleres/cpp.png",
      nombre: "Aprendiendo C++",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/android.png",
      nombre: "Android avanzado",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/react.png",
      nombre: "React para novatos",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/ia.png",
      nombre: "IA aplicada a imagenes",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/unity.png",
      nombre: "Unity3d",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/vjyn.jpg",
      nombre: "Videojuegos y negocios",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: "/talleres/cpp.png",
      nombre: "Aprendiendo C++",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/android.png",
      nombre: "Android avanzado",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/react.png",
      nombre: "React para novatos",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/ia.png",
      nombre: "IA aplicada a imagenes",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/unity.png",
      nombre: "Unity3d",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
    {
      img: process.env.PUBLIC_URL + "/talleres/vjyn.jpg",
      nombre: "Videojuegos y negocios",
      ponente: "Juanito Perez Aurio",
      fecha: "17 de agosto del 2020 a las 4:00PM",
      descripcion:
        "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
    },
  ];
  