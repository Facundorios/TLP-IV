import { Configuracion } from "./patters/singleton/configutation";
import { ConexionDB } from "./patters/singleton/conexiondb";

import { DispositivoEntradaFactory } from "./patters/factory-method/dispositivoEntrada";
import { PerifericoSalidaFactory } from "./patters/factory-method/perifericoSalida";
import {
  DepartamentoMantenimiento,
  Equipo,
} from "./patters/observer/departamentoMantenimiento";
import {
  InterfazUsuario,
  Inventario,
} from "./patters/observer/observadorMantenimiento";

//Singletón, ejercicio 1
const config = Configuracion.getInstancia();

config.setIdioma("en");
config.setNivelRegistro("DEBUG");
config.setRutaBaseDatos("/database/databaseConnection.js");

console.log(config.getRutaBaseDatos());
console.log(config.getNivelRegistro());
console.log(config.getIdioma());

//Singletón, ejercicio 2
const conexion = ConexionDB.getInstancia();

conexion.conectar();
conexion.desconectar();

//Factory Method, ejercicio 1:
const teclado = DispositivoEntradaFactory.crearDispositivo(
  "Teclado",
  "USB",
  "Logitech"
);
console.log(teclado?.descripcion());
const raton = DispositivoEntradaFactory.crearDispositivo(
  "Raton",
  "Bluetooth",
  "Microsoft"
);
console.log(raton?.descripcion());
const scanner = DispositivoEntradaFactory.crearDispositivo(
  "Scanner",
  "WiFi",
  "HP"
);
console.log(scanner?.descripcion());

//Factory Method, ejercicio 2:
const monitor = PerifericoSalidaFactory.crearPeriferico(
  "Monitor",
  "1920x1080",
  "Samsung"
);
console.log(monitor?.especificaciones());
const impresora = PerifericoSalidaFactory.crearPeriferico(
  "Impresora",
  "Láser",
  "Canon"
);
console.log(impresora?.especificaciones());
const proyector = PerifericoSalidaFactory.crearPeriferico(
  "Proyector",
  "4K",
  "Epson"
);
console.log(proyector?.especificaciones());
//Patron Observer, Ejercicio 1:

const departamentoMantenimiento = new DepartamentoMantenimiento(
  "Mantenimiento General"
);
const equipo1 = new Equipo("Impresora 1", "Impresora", "Operativa", 100);

// Uso:
const interfaz1 = new InterfazUsuario("Interfaz 1");
const interfaz2 = new InterfazUsuario("Interfaz 2");
const inventario = new Inventario();

inventario.agregarObservador(interfaz1);
inventario.agregarObservador(interfaz2);

const equipo2 = new Equipo("Teclado 1", "Teclado", "Operativo", 50);
const equipo3 = new Equipo("Ratón 1", "Ratón", "Operativo", 50);

inventario.agregarEquipo(equipo2); // Notifica a las interfaces
inventario.agregarEquipo(equipo3); // Notifica a las interfaces
inventario.eliminarEquipo(equipo2); // Notifica a las interfaces
