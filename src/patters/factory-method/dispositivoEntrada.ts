// Interfaz común para dispositivos de entrada
interface DispositivoEntrada {
  tipoConexion: string;
  marca: string;
  descripcion(): string;
}

// Clases concretas para cada tipo de dispositivo
class Teclado implements DispositivoEntrada {
  tipoConexion: string;
  marca: string;

  constructor(tipoConexion: string, marca: string) {
    this.tipoConexion = tipoConexion;
    this.marca = marca;
  }

  descripcion(): string {
    return `Teclado marca ${this.marca} con conexión ${this.tipoConexion}`;
  }
}

class Raton implements DispositivoEntrada {
  tipoConexion: string;
  marca: string;

  constructor(tipoConexion: string, marca: string) {
    this.tipoConexion = tipoConexion;
    this.marca = marca;
  }

  descripcion(): string {
    return `Ratón marca ${this.marca} con conexión ${this.tipoConexion}`;
  }
}

class Scanner implements DispositivoEntrada {
  tipoConexion: string;
  marca: string;

  constructor(tipoConexion: string, marca: string) {
    this.tipoConexion = tipoConexion;
    this.marca = marca;
  }

  descripcion(): string {
    return `Scanner marca ${this.marca} con conexión ${this.tipoConexion}`;
  }
}

// Factory para crear dispositivos de entrada
export class DispositivoEntradaFactory {
  public static crearDispositivo(
    tipo: string,
    tipoConexion: string,
    marca: string
  ): DispositivoEntrada | null {
    switch (tipo) {
      case "Teclado":
        return new Teclado(tipoConexion, marca);
      case "Raton":
        return new Raton(tipoConexion, marca);
      case "Scanner":
        return new Scanner(tipoConexion, marca);
      default:
        console.log(`Tipo de dispositivo no reconocido: ${tipo}`);
        return null;
    }
  }
}
