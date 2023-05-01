
export class CafeModel {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: any;

  public constructor (id: number, nombre: string, tipo: string, region: string, sabor: string, altura: number, imagen: any) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
