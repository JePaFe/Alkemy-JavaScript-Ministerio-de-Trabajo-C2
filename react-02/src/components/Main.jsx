import React from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";

function Main() {
  const producto3 = "Producto 3 contante";

  const handleClickButton = () => {
    console.log("Click en botón con handleClick en Button con función de Main");
  };

  const handleClick = (algo) => {
    console.log(algo);
    console.log("Click en botón con handleClick");
  };

  const handleLink = (event) => {
    event.preventDefault();
    console.log("Clic en enlace");
  };

  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <main>
      <h1>Listado de productos</h1>
      <input type="text" onInput={handleInput} />
      <section>
        <ProductCard
          nombre="Producto 1"
          precio="100"
          imagen="https://picsum.photos/200/150?random=1"
        />
        <ProductCard
          nombre="Producto 2"
          precio="150"
          imagen="https://picsum.photos/200/150?random=2"
        />
        <ProductCard
          nombre={producto3}
          precio="200"
          imagen="https://picsum.photos/200/150?random=3"
        />
        <button type="button" onClick={() => console.log("Click on botón")}>
          Click
        </button>
        <button type="button" onClick={() => handleClick("texto")}>
          Click
        </button>
        <a href="https://google.com" target="_blank" onClick={handleLink}>
          Link
        </a>
        <Button fnClick={handleClickButton} />
      </section>
    </main>
  );
}

export default Main;
