class Document_ {
  data: string = "";
  filename: string = "";

  constructor() {}

  open(): void {
    // Lógica para abrir el documento
  }
}

class WritableDocument_ extends Document_ {
  save(): void {
    // Lógica para guardar el documento
  }
}

class Project {
  writableDocs: WritableDocument_[] = [];
  documents: Document_[] = [];

  saveAll(): void {
    for (const doc of this.writableDocs) {
      doc.save();
    }
  }

}

class Cuadrado{
    lado: number;

    constructor(lado: number){
         this. lado = lado;
    }

    getArea(): number {
        return this.lado* this.lado;
    }
    
}

class Rectangulo extends Cuadrado{
    lado:number;
    ancho: number;

    constructor(lado:number, ancho: number){
        super(lado);
        this.lado = lado;
        this.ancho = ancho;
    }

    getArea(){
        return this.lado * this.ancho;
    }

}

