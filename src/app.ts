import { Equipo, Inventario } from "./patters/singleton-patter";

//Patron Singletón
const inventario = Inventario.obtenerInstancia();

const equipo1: Equipo = {
  name: "Laptop",
  tipo: "Computo",
  estado: "disponible",
};

inventario.agregarEquipo(equipo1);
console.log(inventario.mostrarEquipos());
