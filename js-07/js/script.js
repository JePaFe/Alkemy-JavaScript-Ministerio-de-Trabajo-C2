// class Usuario {
//   constructor(nombre, apellido, dni) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.dni = dni;
//   }

//   nombreCompleto() {
//     return this.nombre + " " + this.apellido;
//   }
// }

// const usuario1 = new Usuario("Juan", "Perez", 98765432);
// const usuario2 = new Usuario("Maria", "Garcia", 98765433);

// console.log(usuario2.nombreCompleto());

// ---

const calificaciones = [8, 6, 8, 9, 10];

//         31           10
const total = calificaciones.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

// total = 41
