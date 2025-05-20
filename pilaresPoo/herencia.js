"use strict";
//Nivel 1: Clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar() {
        console.log(`${this.marca} ${this.modelo} está arrancando.`);
    }
    detener() {
        console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
}
// Nivel 2: Subclase Coche que hereda de Vehiculo
class Coche extends Vehiculo {
    constructor(marca, modelo, numeroDePuertas) {
        super(marca, modelo);
        this.numeroDePuertas = numeroDePuertas;
    }
    tocarBocina() {
        console.log(`${this.marca} ${this.modelo} está tocando la bocina.`);
    }
}
// Nivel 3: Subclase Deportivo que hereda de Coche
class Deportivo extends Coche {
    constructor(marca, modelo, numeroDePuertas, esConvertible) {
        super(marca, modelo, numeroDePuertas);
        this.esConvertible = esConvertible;
    }
    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando rápidamente.`);
    }
}
// Ejemplo de uso
const miVehiculo = new Vehiculo("Toyota", "Corolla");
miVehiculo.arrancar();
miVehiculo.detener();
const miCoche = new Coche("Honda", "Civic", 4);
miCoche.arrancar();
miCoche.tocarBocina();
const miDeportivo = new Deportivo("Ferrari", "Spider", 2, true);
miDeportivo.arrancar();
miDeportivo.acelerar();
miDeportivo.detener();
