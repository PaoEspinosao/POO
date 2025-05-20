export class Producto {
    
    private nombre: string;
    private precio: number;
    private marca: string;
    private cantidad: number;

    constructor(nombre: string, precio: number, marca: string, cantidad: number){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.cantidad = cantidad;
    }


    public getNombre(): string {
        return this.nombre;
    }


    public setNombre(nombre: string) {
        this.nombre = nombre;
    }


    public getPrecio(): number {
        return this.precio;
    }


    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string) {
        this.marca = marca;
    }


    public getCantidad(): number {
        return this.cantidad;
    }


    public setCantidad(cantidad: number) {
        this.cantidad = cantidad;
    }



}
