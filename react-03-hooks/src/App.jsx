import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Cart from "./components/Cart";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <h1>App</h1>
      <p>Contador: {contador}</p>
      <Button fnIncrementar={incrementar} />

      {/* <Form /> */}

      <Cart />

      <div>Count: {count}</div>
    </>
  );
}

export default App;
