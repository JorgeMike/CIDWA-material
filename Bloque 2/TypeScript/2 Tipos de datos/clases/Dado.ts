class Dado {
  private valor: number = 0;

  private generar() {
    this.valor = Math.floor(Math.random() * 6) + 1;
  }

  public tirar() {
    this.generar();
  }

  public imprimir() {
    console.log(`Salió el valor ${this.valor}`);
  }
}
console.clear();
let dado = new Dado();

dado.tirar();
dado.imprimir();
