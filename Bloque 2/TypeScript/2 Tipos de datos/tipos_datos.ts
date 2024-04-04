console.clear();

let edad:number

const constante =
  "const: Es una variable que se debe inicializar y no puede cambiar su contenido";

console.log(constante);

console.log(edad)

let variableLet: string =
  "let: Es una variable que puede ser reasignada, y que usa la inferencia de tipo solo cuando se inicializa";

console.log(variableLet);

/* number, string, boolean */

/* interface = estructura de datos */

interface Usuario {
  nombre: string;
  edad: number;
  genero?: string;
}

type respuestas = "si" | "no"

let jorge: Usuario;

jorge = {
  trabjo: ""
};

let usuarios: Usuario[];

usuarios = [
  {
    nombre: "Jorge Miguel Alvarado Reyes",
    edad: 22,
    genero: "M",
  },
  {
    nombre: "Miguel Reyes",
    edad: 20,
  },
  {
    nombre: "Leydi Jimenez Pineda",
    edad: 30,
    genero: "F",
  },
];

console.table(jorge);

console.table(usuarios, ["nombre", "edad"]);

/* Extensiones */

interface Empleado extends Usuario {
  //un interface se puede tener una extension de otra interface
  contratado: boolean;
  salario: number;
}

interface Empleado {
  // Tambien se puede ampliar
  area: string;
}

let Leydi: Empleado = {
  contratado: true,
  edad: 30,
  nombre: "Leydi",
  genero: "Tractor",
  salario: 15000,
  area: "CEDETEC",
};

console.log(Leydi);

/* Type */

/* Diferencias? */

type UsuarioType = {
  nombre: string;
  edad: number;
  genero?: string;
};

type EmpleadoType = {
  contratado: boolean;
  salario: number;
  area: string;
};

type EmpleadoConInfoUsuario = UsuarioType & EmpleadoType;

type perro = string | number;

const ejemploDeTipado: perro = 6;

console.log(ejemploDeTipado);

/* Clases */
