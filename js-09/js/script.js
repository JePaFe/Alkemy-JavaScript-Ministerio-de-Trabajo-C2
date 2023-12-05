const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;

  if (nombre.length < 3) {
    alert("Ingrese por lo menos 3 caracteres");
  }

  console.log(nombre);
});
