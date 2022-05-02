export class Plant {
  id: number;
  altura_maxima: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  sutrato_siembra: string;
  clima: string;

  constructor(
    id: number,
    altura_maxima: number,
    nombre_comun: string,
    nombre_cientifico: string,
    tipo: string,
    sutrato_siembra: string,
    clima: string
  ) {
    this.id = id;
    this.altura_maxima = altura_maxima;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo = tipo;
    this.sutrato_siembra = sutrato_siembra;
    this.clima = clima;
  }
}
