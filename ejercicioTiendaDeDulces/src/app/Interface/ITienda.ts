import{ Producto } from "../Models/Productos";


export interface ITienda{

    agregarProducto(producto: Producto): void;
    comprarProducto(nombre: string): void;
    verInventario(): Producto[];
    verVentas(): Producto[];

}