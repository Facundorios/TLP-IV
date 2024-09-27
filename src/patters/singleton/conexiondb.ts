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
