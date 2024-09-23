interface Inventario {
  equipos: { nombre: string; tipo: string; estado: string }[];
}

export class InventarioViejo implements Inventario {
  equipos: { nombre: string; tipo: string; estado: string }[];

  constructor() {
    this.equipos = [];
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const equipo = {
      nombre: nombre,
      tipo: tipo,
      estado: estado,
    };
    this.equipos.push(equipo);
  }

  public listarEquipos() {
    return this.equipos;
  }
}

export class AdaptadorInventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarEquipo(nombre, tipo, estado);
  }

  public listarEquipos() {
    return this.inventarioViejo.listarEquipos();
  }
}
