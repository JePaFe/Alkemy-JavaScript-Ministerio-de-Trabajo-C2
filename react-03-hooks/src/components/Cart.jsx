import React, { useEffect, useState } from "react";

function Cart() {
  const [items, setItems] = useState([]);
  const [productos, setProductos] = useState([]);

  // const productos = [
  //   { id: 1, nombre: "Producto 1" },
  //   { id: 4, nombre: "Producto 4" },
  //   { id: 6, nombre: "Producto 6" },
  // ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((datos) => setProductos(datos));
  }, []);

  useEffect(() => {
    console.log("Se ejecuto el useEffect");
  }, [productos]);

  const agregarProducto = (producto) => {
    console.log(producto);

    const index = items.findIndex((item) => item.id == producto.id);

    console.log(index);

    if (index == -1) {
      setItems([...items, producto]);
    } else {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };

  return (
    <>
      <h2>Productos</h2>
      {productos.map((producto) => (
        <ul key={`producto-${producto.id}`}>
          <li onClick={() => agregarProducto(producto)}>
            Agregar {producto.title}
          </li>
        </ul>
      ))}

      <h2>Carrito</h2>
      {items.map((item) => (
        <ul key={`item-${item.id}`}>
          <li onClick={() => agregarProducto(item)}>Eliminar {item.title}</li>
        </ul>
      ))}
    </>
  );
}

export default Cart;
