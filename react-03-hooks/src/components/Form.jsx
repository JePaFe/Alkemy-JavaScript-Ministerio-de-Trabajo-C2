import React, { useState } from "react";

function Form() {
  const [nombre, setNombre] = useState("");
  const [correo, SetCorreo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const changeNombre = (event) => {
    setNombre(event.target.value);
  };
  const changeCorreo = (event) => {
    SetCorreo(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <h1>Form</h1>

      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            id="nombre"
            onChange={changeNombre}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo: </label>
          <input
            type="email"
            name="correo"
            value={correo}
            id="correo"
            onChange={changeCorreo}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submitted && (
        <div>
          <p>Nombre: {nombre}</p>
          <p>Correo: {correo}</p>
        </div>
      )}
    </>
  );
}

export default Form;
