// function saludar(nombre) {
//   //   if (typeof nombre == "string") {
//   //     console.log("Hola " + nombre);
//   //   }

//   if (nombre != undefined) {
//     console.log("Hola " + nombre);
//   }
// }

// saludar();
// saludar(2);
// saludar("Juan");
// saludar("Maria");

// ---

function sumar(primerNumero, segundoNumero) {
  //   let resultado = primerNumero + segundoNumero;
  //   return resultado;

  return primerNumero + segundoNumero;
}

function mostrar(mensaje) {
  console.log(mensaje);
}

let suma = sumar(3, 5);
mostrar(suma);

suma = sumar(6, 15);
mostrar(suma);

// const nombre = prompt('Ingrese su nombre: ')
