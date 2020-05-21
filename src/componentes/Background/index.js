import React from "react";
import BackgroundSlider from "react-background-slider";

const images = [
  process.env.PUBLIC_URL + "/fondos/i1.jpg",
  process.env.PUBLIC_URL + "/fondos/i2.jpg",
  process.env.PUBLIC_URL + "/fondos/i3.jpg",
  process.env.PUBLIC_URL + "/fondos/i4.jpg",
  process.env.PUBLIC_URL + "/fondos/i5.jpg",
  process.env.PUBLIC_URL + "/fondos/i6.jpg",
  process.env.PUBLIC_URL + "/fondos/i7.jpg",
  process.env.PUBLIC_URL + "/fondos/i8.jpg",
  process.env.PUBLIC_URL + "/fondos/i9.jpg",
  process.env.PUBLIC_URL + "/fondos/i10.jpg",
];
const prueba=[
  process.env.PUBLIC_URL + "/fondos/i1.jpg"];
function Background(props) {
  return <BackgroundSlider images={prueba} duration={15} transition={2} />;
}
export default Background;
