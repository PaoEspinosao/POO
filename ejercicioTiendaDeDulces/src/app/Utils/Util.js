"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarInventario = mostrarInventario;
function mostrarInventario(producto, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (contenedor && producto) {
        contenedor.innerHTML;
        producto.forEach(item => {
            const elemento = document.createElement("div");
            elemento.innerHTML = `
                <h2>Tienda de Dulces</h2>
                <h2>
            `;
            contenedor.appendChild(elemento);
        });
    }
}
