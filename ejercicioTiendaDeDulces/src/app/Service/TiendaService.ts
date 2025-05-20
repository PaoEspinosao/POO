import { ITienda } from "../Interface/ITienda";
import { Producto } from "../Models/Productos";


export class TiendaService implements ITienda {

    private productos: Producto[]= [];

    agregarProducto(producto : Producto):void{
        this.productos.push(producto)
    }

    
    seleccionarDulce(nombre: string): Producto | undefined{
    
        return this.productos.find(item => item.getNombre() === nombre);            
    }
    
    comprarDulce(precio: number): void{
        const producto = this.productos.find(item => item.getPrecio() === precio);
        if (producto) {
            console.log(`Has comprado ${producto.getNombre()} por ${producto.getPrecio()}`);
            producto.setCantidad(producto.getCantidad() - 1);
        } else {
            console.log("Producto no encontrado");
        }

    }
    mostrarVenta(venta: Producto[]): { nombre: string; precio: number; marca: string; cantidad: number }[] {
        return venta.map(item => {
            return {
                nombre: item.getNombre(),
                precio: item.getPrecio(),
                marca: item.getMarca(),
                cantidad: item.getCantidad()
            }
        });
    }     

}