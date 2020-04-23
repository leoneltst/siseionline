import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";

export default function QuienesSomos() {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        marginLeft: "10%",
        justifyContent: "center", marginTop: "30px",
      }}
    >
      <Paper elevation={3} style={{ backgroundColor: "powderblue" }}>
        <Typography variant="h3" component="h3">
          ¿Quienes somos?
        </Typography>
        <Typography variant="body1">
          SISeI es un simposio con más de una década de trayectoria, organizado
          por un comité de estudiantes pertenecientes al Insitituto Tecnlógico
          de México campus Culiacán y orientado a todas esas personas como tú,
          apasionadas por aprender cosas nuevas, interesantes y que aporten a tu
          perfil profesional. Somos un simposio con el afán de reunir las
          mejores y más relevantes conferencias de las ciencias y tecnologías,
          así como talleres que complementan el contenido de este macro evento.
          Abarcando una amplia gama de temáticas, buscamos que obtengas
          satisfacción por el conocimiento ofrecido para ti, nuestro asistente.
        </Typography>
      </Paper>
    </div>
  );
}
