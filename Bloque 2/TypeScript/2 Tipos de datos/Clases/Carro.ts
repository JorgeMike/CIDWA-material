import { Vehiculo } from "./Vehiculo";

export class Carro extends Vehiculo {
  numeroPuertas: number;
  airbags: boolean;

  constructor(
    marca: string,
    modelo: string,
    numeroPuertas: number,
    airbags: boolean,
    year: number
  ) {
    super(marca, modelo, year);
    this.numeroPuertas = numeroPuertas;
    this.airbags = airbags;
  }

  mostrarCarro(): void {
    super.mostrarDetalles();
    console.log(`No.Puertas: ${this.numeroPuertas}`);
    console.log(`Airbags: ${this.airbags}`);
  }
}
