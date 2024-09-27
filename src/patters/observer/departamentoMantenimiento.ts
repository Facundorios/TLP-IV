// Interfaz para el observador
interface Observador {
  actualizar(equipo: Equipo): void;
}

// Clase que actúa como observador
export class DepartamentoMantenimiento implements Observador {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  actualizar(equipo: Equipo): void {
    console.log(
      `El departamento ${this.nombre} ha sido notificado: El equipo ${equipo.nombre} requiere mantenimiento preventivo.`
    );
  }
}

export class Equipo {
  private observadores: Observador[] = [];
  public nombre: string;
  public tipo: string;
  public estado: string;
  public tiempoUso: number;
  private umbral: number;

  constructor(nombre: string, tipo: string, estado: string, umbral: number) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
    this.tiempoUso = 0;
    this.umbral = umbral;
  }

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  private notificar(): void {
    for (const observador of this.observadores) {
      observador.actualizar(this);
    }
  }

  public usar(tiempo: number): void {
    this.tiempoUso += tiempo;
    console.log(`Uso del equipo ${this.nombre}: ${this.tiempoUso} horas.`);
    if (this.tiempoUso >= this.umbral) {
      this.notificar();
    }
  }
}
