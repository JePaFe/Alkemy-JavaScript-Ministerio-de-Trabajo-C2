import React from "react";
import "./MiComponente.css";

function MiComponente() {
  const estilo = {
    color: "red",
    fontSize: "2em",
    fontWeight: "bold",
  };

  return (
    <>
      <h2 className="color-naranja">Mi Componente</h2>
      <p style={estilo}>Lorem ipsum dolor sit amet.</p>
    </>
  );
}

export default MiComponente;
