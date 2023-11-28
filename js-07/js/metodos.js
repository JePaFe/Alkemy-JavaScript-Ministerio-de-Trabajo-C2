// const usuario = {
//   id: 1,
//   nombre: "Juan",
//   apellido: "Perez",
//   email: "x@x.com",
//   dni: 98765432,
//   admin: false,
//   nombreCompleto: function () {
//     console.log(this.nombre + " " + this.apellido);
//   },
// };

// usuario.nombreCompleto();

const user = {
  id: 1,
  nombre: "Maria",
  apellido: "Garcia",
  email: "y@y.com",
  dni: 23456789,
  admin: true,
  //   nombreCompleto: function () {
  //     console.log(this.nombre + " " + this.apellido);
  //   },
  nombreCompleto(symbol) {
    console.log(this.nombre + " " + this.apellido + symbol);
  },
  esAdmin() {
    return this.admin ? "Es administrador" : "NO es administrador";
  },
};

user.nombreCompleto("!!!");

console.log(user.esAdmin());

user.getEmail = function () {
  return this.email;
};

console.log(user.getEmail());
