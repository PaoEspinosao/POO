import { TiendaService } from "./app/Service/TiendaService";
import { Producto } from "./app/Models/Productos";
import { mostrarInventario } from "./app/Utils/Util";

const tienda = new TiendaService();

async function agregarProducto(): Promise<string> {
    const nombreInput = (document.getElementById("inputAgrear") as HTMLInputElement).value;

    console.log("nombre recibido:", nombreInput);

    return nombreInput;
}
