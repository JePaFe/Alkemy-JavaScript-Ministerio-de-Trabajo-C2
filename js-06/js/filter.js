const numeros = [6, 2, 7, 3, 5, 8, 9, 1, 4];

// function filtro(item) {
//   if (item % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filtro(item) {
//   return item % 2 == 0 ? true : false;
// }

// function filtro(item) {
//   return item % 2 == 0;
// }

// const filtro = function (item) {
//   return item % 2 == 0;
// };

// const filtro = item => item % 2 == 0;

// const numerosFiltrados = numeros.filter(filtro);

const numerosFiltrados = numeros.filter(numero => numero % 2 == 0);

console.log(numeros, numerosFiltrados);
