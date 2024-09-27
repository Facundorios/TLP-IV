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
