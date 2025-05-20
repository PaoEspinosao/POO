import{ Producto } from "../Models/Productos";


export interface ITienda{

    agregarProducto(producto: Producto): void;
    seleccionarDulce(nombre: string): Producto | undefined;
    comprarDulce(precio: number): void;
    mostrarVenta(venta: Producto[]): { nombre: string; precio: number; marca: string; cantidad: number }[];

}