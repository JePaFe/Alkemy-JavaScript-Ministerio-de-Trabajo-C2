const h1 = document.querySelector("h1");
// console.dir(h1);

// function mensaje() {
//   console.log("Click en h1");
// }

// const mensaje = function () {
//   console.log("Click en h1");
// };

// const mensaje = () => console.log("Click en h1");

// h1.addEventListener("click", mensaje);

// ---

h1.addEventListener("click", () => console.log("Click en h1 (1)"));

h1.addEventListener("click", () => console.log("Click en h1 (2)"));

h1.addEventListener("dblclick", () => console.log("Doble click en h1"));

// ---

// h1.onclick = () => console.log("Click en h1 (1)");

// h1.onclick = () => console.log("Click en h1 (2)");
