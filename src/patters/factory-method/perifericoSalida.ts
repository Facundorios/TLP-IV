// Interfaz común para periféricos de salida
interface PerifericoSalida {
  especificaciones(): string;
}

// Clases concretas para cada tipo de periférico
class Monitor implements PerifericoSalida {
  resolucion: string;
  marca: string;

  constructor(resolucion: string, marca: string) {
    this.resolucion = resolucion;
    this.marca = marca;
  }

  especificaciones(): string {
    return `Monitor ${this.marca} con resolución ${this.resolucion}`;
  }
}

class Impresora implements PerifericoSalida {
  tipoImpresion: string;
  marca: string;

  constructor(tipoImpresion: string, marca: string) {
    this.tipoImpresion = tipoImpresion;
    this.marca = marca;
  }

  especificaciones(): string {
    return `Impresora ${this.marca} de tipo ${this.tipoImpresion}`;
  }
}

class Proyector implements PerifericoSalida {
  resolucion: string;
  marca: string;

  constructor(resolucion: string, marca: string) {
    this.resolucion = resolucion;
    this.marca = marca;
  }

  especificaciones(): string {
    return `Proyector ${this.marca} con resolución ${this.resolucion}`;
  }
}

// Factory para crear periféricos de salida
export class PerifericoSalidaFactory {
  public static crearPeriferico(
    tipo: string,
    propiedad: string,
    marca: string
  ): PerifericoSalida | null {
    switch (tipo) {
      case "Monitor":
        return new Monitor(propiedad, marca);
      case "Impresora":
        return new Impresora(propiedad, marca);
      case "Proyector":
        return new Proyector(propiedad, marca);
      default:
        console.log(`Tipo de periférico no reconocido: ${tipo}`);
        return null;
    }
  }
}
