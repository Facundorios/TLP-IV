// Interfaz Observador
interface Observador {
  notificar(equipo: Equipo, nuevoEstado: string): void;
}

// Clase que actúa como Observador (Soporte)
export class Soporte implements Observador {
  notificar(equipo: Equipo, nuevoEstado: string): void {
    console.log(
      `Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${nuevoEstado}.`
    );
  }
}

// Clase Observable (Equipo)
export class Equipo {
  private observadores: Observador[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    private estado: string
  ) {}

  // Método para agregar un observador
  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  // Método para cambiar el estado y notificar a los observadores
  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores(nuevoEstado);
  }

  // Notificar a todos los observadores
  private notificarObservadores(nuevoEstado: string): void {
    for (const observador of this.observadores) {
      observador.notificar(this, nuevoEstado);
    }
  }
}
