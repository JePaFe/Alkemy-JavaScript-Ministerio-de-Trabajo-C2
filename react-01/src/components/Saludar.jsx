import React from "react";

function Saludar() {
  const nombre = "Juan";

  const style = {
    color: "orange",
    fontSize: "3em",
  };

  return <h2 style={style}>Hola, {nombre}</h2>;
}

export default Saludar;
