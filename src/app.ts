import { ConexionDB, Configuracion } from "./patters/singleton.patter";

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
