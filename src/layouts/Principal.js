import React from "react";
import Appbar from "../componentes/Appbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Logo from "../asets/Logo-Contornos.png";
import Info from "../componentes/Info/";
import BackgroundSlider from "react-background-slider";
import image1 from "../asets/image1.jpg";
import image2 from "../asets/image2.jpg";

import PlistT from "../componentes/PlistT/";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginLeft: "10%",
    width: "80%",
  },
  divP: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: "1100px",
    height:"50px"
  },
  glP: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  patrocinadores: {
    width: "50px",
    height: "50px",
  },
}));

export default function Principal() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BackgroundSlider
        images={[image1, image2]}
        duration={10}
        transition={2}
      />
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Info
            titulo={"quienes somos"}
            contenido={
              "SISeI es un simposio con más de una década de trayectoria, organizado por un comité de estudiantes pertenecientes al Insitituto Tecnlógico de México campus Culiacán y orientado a todas esas personas como tú, apasionadas por aprender cosas nuevas, interesantes y que aporten a tu perfil profesional. Somos un simposio con el afán de reunir las mejores y más relevantes conferencias de las ciencias y tecnologías, así como talleres que complementan el contenido de este macro evento. Abarcando una amplia gama de temáticas, buscamos que obtengas satisfacción por el conocimiento ofrecido para ti, nuestro asistente."
            }
          />
        </Grid>
        <Grid item>
          <PlistT />
        </Grid>
        <Grid item>
          <PlistT />
        </Grid>
        <Grid item><div className={classes.divP}>
              <GridList className={classes.glP} cols={15}>
                {tileData.map((tile) => (
                  <GridListTile>
                          <img
                            src={tile.img} className={classes.patrocinadores}
                          />
                  </GridListTile>
                ))}
              </GridList>
            </div></Grid>
      </Grid>
    </div>
  );
}



const http = new XMLHttpRequest();
const url= 'htttp/'


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
