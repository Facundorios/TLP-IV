import { Equipo, Inventario } from "./patters/singleton.patter";
import { EquipoFactory } from "./patters/factory-method.patter";

//Patron Singletón
const inventario = Inventario.obtenerInstancia();

const equipo1: Equipo = {
  name: "Laptop",
  tipo: "Computo",
  estado: "disponible",
};

inventario.agregarEquipo(equipo1);
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
console.log(newNotebook.detalles());
