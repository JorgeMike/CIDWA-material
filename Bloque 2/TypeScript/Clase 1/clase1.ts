console.clear();
//declaracion

//var, let, const

const a = "Hola Mundo"; // constante, debe ser inicializada

//diferencia entre let y var

//la diferencia es el alcance de las variables

//var

for (var i = 0; i <= 3; i++) {
  console.log("For var", i);
}

console.log(i);

for (let index = 0; index <= 3; index++) {
  console.log("For let", index);
}

// console.log(index) // <- Error

/* La diferencia entre var y let es el alcance */
/* var tiene un valor global y let tiene un valor de bloque */

/* Tipado */

/* Inferencia */

const b = 5;
let c = "Hola";

console.log(typeof b); //number
console.log(typeof c); //string

/* Tipado explicito */

let d: string = "Adios";
let e: boolean;

e = true;

console.log(typeof d); // string
console.log(typeof e); // boolean

/* Es mejor usar el tipo inferido, se infiere apartir del primer valor */

function sumaTS(a: number, b: number) {
  return a + b;
}

console.log(sumaTS(14, 21));

/* Palabras reservadas, ejemplo: name, class, break, case etc */

/* Objetos y su inferencia */

let persona = {
  nombre: "Jorge",
  edad: 22,
  semestre: 8,
  inscrito: true,
  escuela: {
    nombre: "FES Acatlan",
    ubicacion: {
      estado: "Estado de Mexico",
      municipio: "Naucalpan",
    },
  },
};

/* Acceder a sus propiedades */
/* Extension TypeScript Error */

console.log("Edad: ", persona.edad);

/* any = cualquiera??? */

let f = "Hola";

let g: any = "Adios";

console.log(f.includes("Y"));

/* any = ignora cualquier tipado SIEMPRE EVITAR ANY*/

/* unkonwn */

let h: unknown = "Como estas";

/* el tipo ded dato es desconocido no puedes usar funciones dado que no sabemos el tipado */

/* Funciones */

/* Tenemos 3 manera de hacer funciones en TS */

function saludarUsuario(nombreUsuario: string) {
  return `Hola ${nombreUsuario}`;
}

console.log(saludarUsuario(persona.nombre));

/* Descontruccion de objetos */

/* Imaginemos una caja que contiene cosas en un interior */
/* y queremos sacar ciertos objetos de la caja */

const { edad, inscrito } = persona;
const {
  escuela: { nombre },
} = persona;

const {
  escuela: {
    ubicacion: { estado, municipio },
  },
} = persona;

console.log(nombre, estado);
console.log(edad, inscrito);

/* Descontruccion de arreglos */

const arreglo = [1, 2, 3, 4, 5, 6];

const primero = arreglo[0];

/* Desconstrucion en parametros de funciones */

/* function printInfo({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`Usuario: ${nombre} \nEdad: ${edad}`);
} */

function printInfo(persona: { nombre: string; edad: number }) {
  const { edad, nombre } = persona;
  console.log(`Usuario: ${nombre} \nEdad: ${edad}`);
}

printInfo({ nombre: persona.nombre, edad: persona.edad });

/* arrow functions */

const sayHi = (nombre: string) => {
  console.log(nombre);
};

sayHi(persona.nombre);

/* Se puden pasar funciones como pararmetros a otras funciones??? */