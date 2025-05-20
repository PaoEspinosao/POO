"use strict";
class Document_ {
    constructor() {
        this.data = "";
        this.filename = "";
    }
    open() {
        // Lógica para abrir el documento
    }
}
class WritableDocument_ extends Document_ {
    save() {
        // Lógica para guardar el documento
    }
}
class Project {
    constructor() {
        this.writableDocs = [];
        this.documents = [];
    }
    saveAll() {
        for (const doc of this.writableDocs) {
            doc.save();
        }
    }
}
class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    getArea() {
        return this.lado * this.lado;
    }
}
class Rectangulo extends Cuadrado {
    constructor(lado, ancho) {
        super(lado);
        this.lado = lado;
        this.ancho = ancho;
    }
    getArea() {
        return this.lado * this.ancho;
    }
}
