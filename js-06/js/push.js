const numeros = [4, 6, 8];

// numeros[3] = 9;
// numeros[numeros.length] = 9
numeros.push(9);
numeros.push(10, 11);

numeros.unshift(3);

// console.log(numeros[4]);

let numero = numeros.pop();
console.log(numero);

numero = numeros.shift();
console.log(numero);

console.log(numeros);
