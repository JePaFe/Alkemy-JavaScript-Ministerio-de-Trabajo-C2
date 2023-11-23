// let nombre1 = "Juan";
// let nombre2 = "Maria";
// let nombre3 = "Pedro";
// let nombre4 = "Ana";

const nombres = ["Juan", "Maria", "Pedro", "Ana"];
// const nombres = new Array("Juan", "Maria", "Pedro", "Ana");

console.log(nombres.length);

nombres[0] = "Juan Pablo";
nombres[4] = "Susana";

delete nombres[2];

console.log(nombres);
console.log(nombres[1]);
console.log(nombres.length);
