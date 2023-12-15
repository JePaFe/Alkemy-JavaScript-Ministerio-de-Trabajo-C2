import React from "react";

function ProductCard({ imagen, nombre, precio }) {
  //   console.log(props);
  return (
    <>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </>
  );
}

export default ProductCard;
