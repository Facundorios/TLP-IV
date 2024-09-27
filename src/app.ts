import { Configuracion } from "./patters/singleton/configutation";
import { ConexionDB } from "./patters/singleton/conexiondb";

import { DispositivoEntradaFactory } from "./patters/factory-method/dispositivoEntrada";
import { PerifericoSalidaFactory } from "./patters/factory-method/perifericoSalida";

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
