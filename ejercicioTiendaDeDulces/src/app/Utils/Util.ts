import { Producto } from "../Models/Productos";

export function mostrarLista(productos: Producto[], titulo: string): string {
    if (productos.length === 0) return `<p>No hay ${titulo.toLowerCase()} registrados.</p>`;

    return `
        <h4>${titulo}</h4>
        <ul class="list-group">
            ${productos.map(p => `
                <li class="list-group-item">
                    ${p.getNombre()} - $${p.getPrecio()}- ${p.getCantidad()}
                </li>`).join("")}
        </ul>
    `;
}