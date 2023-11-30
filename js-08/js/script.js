// let parrafo = document.querySelector("p");
// console.log(parrafo);

// parrafo = document.querySelector(".oculto");
// console.log(parrafo);

// parrafo = document.querySelector("#tercer-parrafo");
// console.log(parrafo);

// parrafo = document.querySelector("footer p");
// console.log(parrafo);

// ---

document.addEventListener("DOMContentLoaded", () => {
  let parrafos = document.getElementsByTagName("p");
  // console.log(parrafos);

  parrafos = document.querySelectorAll("section p.parrafo");
  console.log(parrafos);
});
