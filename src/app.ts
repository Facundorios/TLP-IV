import { Inventario } from "./patters/singleton.patter";
import { EquipoFactory } from "./patters/factory-method.patter";
import { Soporte, Equipo } from "./patters/observer.patter";
import {
  AdaptadorInventario,
  InventarioViejo,
} from "./patters/adaptador.patter";

//Patron Singletón
const inventario = Inventario.obtenerInstancia();

inventario.agregarEquipo("Laptop", "Computo", "disponible");
console.log("Patron Singletón-------------------------");
console.log(inventario.mostrarEquipos());

//Patron Factory Method
const factory = new EquipoFactory();
const equipo2 = {
  tipo: "Notebook",
  nombre: "Dell XPS",
  ram: "16GB",
  procesador: "i7",
};

const newNotebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log("Patron Factory Method-------------------------");
console.log(newNotebook.detalles());

//Metodo Observer
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

console.log("Patron Observer-------------------------");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

console.log("Patron Adaptador-------------------------");
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
