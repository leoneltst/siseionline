import React from "react";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import MiniTarjeta from"../componentes/MiniTarjeta/";
import Info from"../componentes/Info/";
import Background from"../componentes/Background/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    margin:'0%',
    width: '100%',
    height: '500px'
  },
}));

const tileData = [
  {
    img: '/talleres/cpp.png',
    nombre: "Aprendiendo C++",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/android.png',
    nombre: "Android avanzado",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/react.png',
    nombre: "React para novatos",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/ia.png',
    nombre: "IA aplicada a imagenes",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/unity.png',
    nombre: "Unity3d",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/vjyn.jpg',
    nombre: "Videojuegos y negocios",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: '/talleres/cpp.png',
    nombre: "Aprendiendo C++",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/android.png',
    nombre: "Android avanzado",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/react.png',
    nombre: "React para novatos",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/ia.png',
    nombre: "IA aplicada a imagenes",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/unity.png',
    nombre: "Unity3d",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/vjyn.jpg',
    nombre: "Videojuegos y negocios",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: '/talleres/cpp.png',
    nombre: "Aprendiendo C++",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/android.png',
    nombre: "Android avanzado",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/react.png',
    nombre: "React para novatos",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/ia.png',
    nombre: "IA aplicada a imagenes",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/unity.png',
    nombre: "Unity3d",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/vjyn.jpg',
    nombre: "Videojuegos y negocios",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: '/talleres/cpp.png',
    nombre: "Aprendiendo C++",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/android.png',
    nombre: "Android avanzado",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/react.png',
    nombre: "React para novatos",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/ia.png',
    nombre: "IA aplicada a imagenes",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/unity.png',
    nombre: "Unity3d",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/vjyn.jpg',
    nombre: "Videojuegos y negocios",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: '/talleres/cpp.png',
    nombre: "Aprendiendo C++",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Pariatur excepteur Lorem ut laborum voluptate ex id ut velit et officia pariatur. Eu id in in aute eu in laboris eu velit. Laborum Lorem nisi minim fugiat irure amet. Aliquip veniam duis amet sunt tempor cillum laborum fugiat mollit dolore magna sint tempor.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/android.png',
    nombre: "Android avanzado",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "En el sistema de justicia criminal, las ofensas de origen sexual se consideran especialmente perversas, en la ciudad de nueva york los detectives que investigan estos terribles delitos son miembros de un escuadrón de élite conocido como: unidad de victimas especiales.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/react.png',
    nombre: "React para novatos",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/ia.png',
    nombre: "IA aplicada a imagenes",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/unity.png',
    nombre: "Unity3d",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
  {
    img: process.env.PUBLIC_URL + '/talleres/vjyn.jpg',
    nombre: "Videojuegos y negocios",
    ponente: "Juanito Perez Aurio",
    fecha:"17 de agosto del 2020 a las 4:00PM",
    descripcion:
      "Ea pariatur consectetur esse non cillum esse incididunt nostrud ullamco incididunt dolor aliquip excepteur. Cupidatat culpa mollit dolor Lorem consectetur. Cupidatat adipisicing elit nisi elit id et sit elit.",
  },
];

export default function Ptalleres() {
  const classes = useStyles();
  
  return (
    <div>
      <Background/>

      <Grid container direction="column" justify="center" alignItems="center"  style={{
        width: "80%",
        display: "flex",
        marginLeft: "10%",
        marginTop: "30px",
      }}>
        <Grid item>
          
        </Grid>
        <GridList cellHeight={400} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <Info titulo={"Talleres"} contenido={"En sisei tratamos de ofrecerte los mejores talleres para que puedas tomar la decisión de cómo mejorar tu futuro y adaptarte a las necesidades del mercado actual."}/>
            </ListSubheader>
        </GridListTile>
          {tileData.map((tile) => (
            <MiniTarjeta nombre={tile.nombre} ponente={tile.ponente} fecha={tile.fecha} descripcion={tile.descripcion} imagen={tile.img}  />
          ))}
        </GridList>
      </Grid>
    </div>
  );
}
