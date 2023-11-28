const usuario = {
  id: 1,
  nombre: "Juan",
  apellido: "Perez",
  email: "x@x.com",
  dni: 98765432,
  admin: false,
};

for (const property in usuario) {
  console.log(property, usuario[property]);
}
