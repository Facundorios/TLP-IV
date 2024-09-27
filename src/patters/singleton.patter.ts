export class Configuracion {
  private static instancia: Configuracion;

  private idioma: string;
  private rutaBaseDatos: string;
  private nivelRegistro: string;

  // Constructor privado para evitar instanciación directa
  private constructor() {
    this.idioma = "es";
    this.rutaBaseDatos = "/database/databaseConnection.js";
    this.nivelRegistro = "INFO";
  }

  public static getInstancia(): Configuracion {
    if (!this.instancia) {
      this.instancia = new Configuracion();
    }
    return this.instancia;
  }

  public getIdioma(): string {
    return this.idioma;
  }

  public setIdioma(idioma: string): void {
    this.idioma = idioma;
  }

  public getRutaBaseDatos(): string {
    return this.rutaBaseDatos;
  }

  public setRutaBaseDatos(ruta: string): void {
    this.rutaBaseDatos = ruta;
  }

  public getNivelRegistro(): string {
    return this.nivelRegistro;
  }

  public setNivelRegistro(nivel: string): void {
    this.nivelRegistro = nivel;
  }
}

export class ConexionDB {
  private static instancia: ConexionDB;

  private host: string;
  private puerto: number;
  private usuario: string;
  private conectado: boolean;

  // Constructor privado
  private constructor() {
    this.host = "localhost";
    this.puerto = 5432;
    this.usuario = "admin";
    this.conectado = false;
  }

  // Método estático para obtener la única instancia de ConexionDB
  public static getInstancia(): ConexionDB {
    if (!this.instancia) {
      this.instancia = new ConexionDB();
    }
    return this.instancia;
  }

  // Método para conectar a la base de datos
  public conectar(): void {
    if (!this.conectado) {
      console.log(
        `Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.usuario}...`
      );
      this.conectado = true;
    } else {
      console.log("Ya está conectado a la base de datos.");
    }
  }

  // Método para desconectar de la base de datos
  public desconectar(): void {
    if (this.conectado) {
      console.log("Desconectando de la base de datos...");
      this.conectado = false;
    } else {
      console.log("No hay conexión activa a la base de datos.");
    }
  }
}
