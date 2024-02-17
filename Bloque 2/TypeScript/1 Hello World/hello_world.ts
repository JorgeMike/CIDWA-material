console.clear();

console.log("Hola Mundo");

console.error("Error");

console.warn("Warning");

console.info("Informacion");

console.debug("Debug");

console.table(
  [
    { nombre: "Carlos", edad: 30, profesion: "Ingeniero" },
    { nombre: "Marta", edad: 25, profesion: "Diseñadora" },
    { nombre: "Pablo", edad: 40, profesion: "Arquitecto" },
  ],
  ["nombre", "profesion"]
);

/* console.time() - console.timeEnd() */
