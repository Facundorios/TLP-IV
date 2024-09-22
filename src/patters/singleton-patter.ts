//Tipo de estado disponible para el equipo
type EstadoEquipo = "disponible" | "en reparación";

//Interfaz equipo para el manejo de los datos
export interface Equipo {
  name: string;
  tipo: string;
  estado: EstadoEquipo;
}

export class Inventario {
  //Se crea una instancia privada de la clase
  private static instancia: Inventario;
  //Se crea un arreglo privado de equipos
  private equipos: Equipo[] = [];

  //constructor con el fin de que no se pueda instanciar la clase
  private constructor() {}

  //Se verifica mediante un metodo si la instancia ya fue creada
  public static obtenerInstancia() {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  //Metodo para agregar un equipo al inventario, se utiliza el tipo void ya que no retorna nada
  public agregarEquipo(equipo: Equipo): void {
    this.equipos.push(equipo);
  }

  public mostrarEquipos(): Equipo[] {
    return this.equipos;
  }
}