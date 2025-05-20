"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaService = void 0;
class TiendaService {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    seleccionarDulce(nombre) {
        return this.productos.find(item => item.getNombre() === nombre);
    }
    comprarDulce(precio) {
        const producto = this.productos.find(item => item.getPrecio() === precio);
        if (producto) {
            console.log(`Has comprado ${producto.getNombre()} por ${producto.getPrecio()}`);
            producto.setCantidad(producto.getCantidad() - 1);
        }
        else {
            console.log("Producto no encontrado");
        }
    }
    mostrarVenta(venta) {
        return venta.map(item => {
            return {
                nombre: item.getNombre(),
                precio: item.getPrecio(),
                marca: item.getMarca(),
                cantidad: item.getCantidad()
            };
        });
    }
}
exports.TiendaService = TiendaService;
