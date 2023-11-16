// function mostrarConsole(mensaje) {
//   console.log(mensaje);
// }

// function mostrarAlert(mensaje) {
//   alert(mensaje);
// }

// function mostrarWrite(mensaje) {
//   document.write(mensaje);
// }

// // const mostrar = function (mensaje) {
// //   console.log(mensaje);
// // };

// // const mostrar = (mensaje) => console.log(mensaje);

// mostrarConsole("Hola mundo!");
// mostrarAlert("Hola mundo!!");
// mostrarWrite("Hola mundo!!!");

// ---

function mostrar(mensaje, callback) {
  //   debugger;
  callback(mensaje);
}

function imprimir(mensaje) {
  document.write(mensaje);
}

mostrar("Hola mundo Console", console.log);
// mostrar("Hola mundo Alert", alert);
// mostrar("Hola mundo Write", imprimir);

// console.log(mostrar);
// alert(mostrar);

