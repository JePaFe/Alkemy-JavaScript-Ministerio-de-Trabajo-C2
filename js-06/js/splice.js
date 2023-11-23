const meses = ["Enero", "Marzo", "Junio", "Julio"];

// const dosMeses = meses.slice(1, 3)

meses.splice(1, 0, "Febrero"); // Insertar
meses.splice(3, 1, "Abril"); // Reemplazar
meses.splice(4, 1); // Borrar
