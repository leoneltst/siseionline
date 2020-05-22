import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styled, { css } from "styled-components";
import 'typeface-roboto';



function TarjetaMin(props) {
  return (
    <Container {...props}>
    <CardItemImagePlace
      src={props.imagen}
    ></CardItemImagePlace>
    <CardBody>
      <BodyContent>
      <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="center"
><Grid item>
        <TitleStyle>{props.nombre}</TitleStyle></Grid><Grid item>   <SubtitleStyle>{props.ponente}</SubtitleStyle></Grid>
     
        </Grid>
      </BodyContent>
    </CardBody>
  </Container>
  );
}


const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 5px;
  border-color: #CCC;
  flex-wrap: nowrap;
  background-color:  rgba(255,255,255,.5);
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  position: relative;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
  width: 160px;
  height:120px;
`;

const CardItemImagePlace = styled.img`
 
  flex-direction: column;
  width: 160px;
  height:120px;
`;

const CardBody = styled.div`
  position: absolute;
  bottom: 2px;
  background-color: rgba(0,0,0,0.2);
  left: 0px;
  right: 14px;
  flex-direction: column;
  display: flex;
`;

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const TitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #FFF;
  padding-bottom: 6px;
  width: 160px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #FFF;
  line-height: 16px;
  opacity: 0.5;
`;
export default TarjetaMin;
