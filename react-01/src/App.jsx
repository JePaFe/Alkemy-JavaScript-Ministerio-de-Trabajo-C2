import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const nombre = "Juan";

  const isOn = true;

  const style = {
    color: "orange",
    fontSize: "2em",
    backgroundColor: isOn ? "green" : "red",
  };

  return (
    <>
      <h1 className={isOn ? "on" : "off"}>App {4 + 3}</h1>
      <p style={style} className="destacado" id="parrafo-uno">
        Hola, {nombre}
      </p>
      <img src="" alt="Imagen" />
      <br />
      <Saludar></Saludar>
      <Saludar />
    </>
  );
}

// const texto = `Hola ${nombre}`;

export default App;
