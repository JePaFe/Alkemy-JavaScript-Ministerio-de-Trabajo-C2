// let nombre = "Juan";
// let apellido = "Perez";
// let dni = 98765432;

// const usuario2 = new Object();
// usuario2.nombre = "Maria";
// usuario2.dni = 23456789;

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
};

console.log(usuario.nombre);
// console.log(usuario["apellido"]);

const { nombre } = usuario;
// console.log(nombre);

usuario.nombre = "Juan Pablo";
// usuario["apellido"] = "Perez Garcia";

usuario.email = "x@x.com";
// usuario["id"] = 1;

delete usuario.dni;

usuario.roles = ["Editor", "Corrector"];
