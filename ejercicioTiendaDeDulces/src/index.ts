import { Producto } from "../src/app/Models/Productos";
import { TiendaService } from "../src/app/Service/TiendaService";
import { mostrarLista } from "./app/Utils/Util";

const tienda = new TiendaService();

const nombre = document.getElementById("nombre") as HTMLInputElement;
const precio = document.getElementById("precio") as HTMLInputElement;
const cantidad = document.getElementById("cantidad") as HTMLInputElement;
const btnAgregar = document.getElementById("btnAgregar") as HTMLButtonElement;

const selectDulces = document.getElementById("selectDulces") as HTMLSelectElement;
const btnComprar = document.getElementById("btnComprar") as HTMLButtonElement;
const btnVerInventario = document.getElementById("btnVerInventario") as HTMLButtonElement;
const btnVerVentas = document.getElementById("btnVerVentas") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;

btnAgregar.addEventListener("click", () => {
    const nuevo = new Producto(
        nombre.value,
        parseFloat(precio.value),
        parseInt(cantidad.value)
    );

    tienda.agregarProducto(nuevo);
    actualizarSelect();
    limpiarCampos();
});

btnComprar.addEventListener("click", () => {
    const nombreSeleccionado = selectDulces.value;
    tienda.comprarProducto(nombreSeleccionado);
});

btnVerInventario.addEventListener("click", () => {
    const inventario = tienda.verInventario();
    resultado.innerHTML = mostrarLista(inventario, "Inventario");
});

btnVerVentas.addEventListener("click", () => {
    const ventas = tienda.verVentas();
    resultado.innerHTML = mostrarLista(ventas, "Ventas");
});

function actualizarSelect() {
    selectDulces.innerHTML = `<option disabled selected>Selecciona un dulce</option>`;
    tienda.verInventario().forEach(p => {
        const option = document.createElement("option");
        option.value = p.getNombre();
        option.text = `${p.getNombre()} - $${p.getPrecio()}`;
        selectDulces.appendChild(option);
    });
}

function limpiarCampos() {
    nombre.value = "";
    precio.value = "";
    cantidad.value = "";
}


