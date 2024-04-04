export class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  getSaldo() {
    console.log("Saldo disponible: " + this.saldo);
  }

  deposito(cantidad: number) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log("Se han depositado " + cantidad )
    }
  }
}
