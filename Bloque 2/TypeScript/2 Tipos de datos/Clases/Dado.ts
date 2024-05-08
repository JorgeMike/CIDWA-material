export class Dado {
  private numeroDeCaras: number;

  constructor(numeroDeCaras: number) {
    this.numeroDeCaras = numeroDeCaras;
  }

  lanzar(): number {
    return Math.floor(Math.random() * this.numeroDeCaras) + 1;
  }

  lanzarNveces(n: number): number[] {
    const resutados: number[] = [];

    for (let i = 0; i < n; i++) {
      const lanzamiento = this.lanzar();
      resutados.push(lanzamiento);
    }

    return resutados;
  }
}
