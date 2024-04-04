export class Animal {
  hacerSonido() {
    console.log("Sonido");
  }
}

export class Perro extends Animal {
  hacerSonido(): void {
    console.log("Ladra");
  }
}

export class Gato extends Animal {
  hacerSonido(): void {
    console.log("Maulla");
  }
}
