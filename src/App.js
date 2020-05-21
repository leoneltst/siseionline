import React from "react";
import "./App.css";
import Appbar from "./componentes/Appbar";
import Principal from "./layouts/Principal";
import Ptalleres from "./layouts/Ptalleres";
import Pconferencias from "./layouts/Pconferencias";

function Greeting(props) {
  const estado = props.state;
  switch (estado) {
    case 1:
      return <Principal />;
    case 2:
      return <Ptalleres />;
    case 3:
      return <Pconferencias />;
  }
}

function App() {
  return (
    <div>
      <Appbar />
      <Greeting state={1} />
    </div>
  );
}

export default App;
