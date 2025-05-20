import { ITienda } from "../Interface/ITienda";
import { Producto } from "../Models/Productos";

export class TiendaService implements ITienda {
    private inventario: Producto[] = [];
    private ventas: Producto[] = [];

    agregarProducto(producto: Producto): void {
        this.inventario.push(producto);
    }

    comprarProducto(nombre: string): void {
        const producto = this.inventario.find(p => p.getNombre() === nombre && p.getCantidad() > 0);
        if (producto) {
            producto.setCantidad(producto.getCantidad() - 1);
            this.ventas.push(producto);
            alert(`¡Compraste ${producto.getNombre()}!`);
        } else {
            alert("Producto no disponible");
        }
    }

    verInventario(): Producto[] {
        return this.inventario;
    }

    verVentas(): Producto[] {
        return this.ventas;
    }
    
}
