let numero: number = 10;
let texto: string = "Hola Mundo";
let booleano: boolean = true;

let arregloTextos: string[] = ["Hola Mundo", "Adios Mundo", "CIDWA"];

let arregloNumeros: number[] = [1, 2, 3, 4, 5];

let arregloAleatorio = ["Hola", 5, "Adios", 1, 2, 4, false];

/* Anadir y eliminar */

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.push(11); //Anade al final del arreglo
console.log(numeros);

numeros.pop(); // elimina el ultimo elemento del arreglo
console.log(numeros);

numeros.shift(); //elimina el primer elemento del aa
console.log(numeros);

numeros.unshift(1); //Anade al principio del arreglo
console.log(numeros);

/* Busqueda */

let nombres: string[] = [
  "Omar",
  "",
  "Raul",
  "Araceli",
  "Carlos",
  "Jesus",
];

let index = nombres.indexOf("Raul")
console.log(index); //Retorna la posicion de lo buscado

console.log(nombres.find((nombre) => nombre.length === 5)); //Retorna el primer elemento que coincida

console.log(nombres.findIndex((nombre) => nombre.length === 5)); //Retorna la posicion elemento que coincida

console.log(nombres.includes("Jorge")); //Si el arreglo incluye o no el valor buscado

/* Transformacion */