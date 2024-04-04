import { Animal, Perro } from "./Animales";
import { Carro } from "./Carro";
import { CuentaBancaria } from "./CuentaBancaria";
import { Vehiculo } from "./Vehiculo";

/* B47r-YyTbQK */
/* B@s3rec1v */

console.clear();

const auto = new Vehiculo("Toyota", "Corolla", 2007);

auto.mostrarDetalles();

const auto2 = new Carro("Toyota", "Yaris", 4, true, 2012);

auto2.mostrarDetalles();

const cuenta = new CuentaBancaria(100);

cuenta.getSaldo();
cuenta.deposito(50);
cuenta.getSaldo();

let mascota = new Perro()

mascota.hacerSonido()

