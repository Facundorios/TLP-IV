import { Equipo } from "./departamentoMantenimiento";

// Interfaz para el observador
interface ObservadorInventario {
  actualizar(inventario: Inventario): void;
}

// Clase que actúa como observador
export class InterfazUsuario implements ObservadorInventario {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  actualizar(inventario: Inventario): void {
    console.log(
      `La interfaz ${this.nombre} se ha actualizado. Inventario actual:`,
      inventario.listarEquipos()
    );
  }
}

// Clase que representa el inventario
export class Inventario {
  private observadores: ObservadorInventario[] = [];
  private equipos: Equipo[] = [];

  // Método para agregar un equipo
  public agregarEquipo(equipo: Equipo): void {
    this.equipos.push(equipo);
    this.notificar();
  }

  // Método para eliminar un equipo
  public eliminarEquipo(equipo: Equipo): void {
    this.equipos = this.equipos.filter((e) => e !== equipo);
    this.notificar();
  }

  // Método para agregar observadores
  public agregarObservador(observador: ObservadorInventario): void {
    this.observadores.push(observador);
  }

  // Método para notificar a los observadores
  private notificar(): void {
    for (const observador of this.observadores) {
      observador.actualizar(this);
    }
  }

  // Método para listar equipos en el inventario
  public listarEquipos(): Equipo[] {
    return this.equipos;
  }
}
