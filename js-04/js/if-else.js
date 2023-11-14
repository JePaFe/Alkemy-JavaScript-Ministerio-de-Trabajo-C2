// let cantidadProductos = 2;

// if (cantidadProductos >= 12) {
//   console.log("Aplicar precio mayorista y descuento");
// } else if (cantidadProductos >= 3) {
//   console.log("Aplicar precio mayorista");
// } else {
//   console.log("Aplicar precio minorista");
// }

// ---

// let edad = 13;
// let autorizacion = true;

// //    true             true
// if (edad >= 13 && autorizacion) {
//   console.log("Puedo ir al excursion");
// } else {
//   console.log("Tiene clases de Lengua");
// }

// ---

// let productos = 2;
// let tarjeta = false;

// if (productos >= 3 || tarjeta) {
//   console.log("Tiene un descuento");
// } else {
//   console.log("Precio de lista");
// }

// ---

let productos = 4;
let mensaje = "Precio ";

// if (productos >= 3) {
//   mensaje += "con ";
// } else {
//   mensaje += "sin ";
// }

mensaje += productos >= 3 ? "con " : "sin "

mensaje += "descuento ";

console.log(mensaje);
