export class Vehiculo {
  marca: string;
  modelo: string;
  year: number;

  constructor(marca: string, modelo: string, year: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
  }

  mostrarDetalles() {
    console.log(`Vehiculo: ${this.marca} ${this.modelo} ${this.year}`);
  }
}
