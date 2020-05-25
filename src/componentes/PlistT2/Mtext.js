import React from "react";
import { useStyles } from "@material-ui/core/styles";
import styled, { css } from "styled-components";

const TitleStyle = styled.span`
  font-family: Roboto;
  font-size: 22px;
  color: #fff;
  padding-bottom: 6px;
  width: 160px;
`;
const TitleStyle1 = styled.span`
  font-family: Roboto;
  font-size: 18px;
  color: #fff;
  padding-bottom: 6px;
  width: 220px;
`;
const TitleStyle2 = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #eee;
  padding-bottom: 6px;
  width: 220px;
`;
const TitleStyle3 = styled.span`
  font-family: Roboto;
  font-size: 12px;
  color: #ff0;
  padding-bottom: 6px;
  width: 220px;
`;

export default function Mtext(props) {
  switch (props.tipo) {
    case "1":
      return <TitleStyle1>{props.text}</TitleStyle1>;
    case "2":
      return <TitleStyle2>{props.text}</TitleStyle2>;
    case "3":
      return <TitleStyle3>{props.text}</TitleStyle3>;
    default:
      return <TitleStyle>{props.text}</TitleStyle>;
  }

  return <TitleStyle>{props.text}</TitleStyle>;
}
