export interface Clientes {
  total:    Total[];
  clientes: Cliente[];
}

export interface Cliente {
  id_cliente: number;
  nombre:     string;
  telefono:   string;
  email:      string;
  estado:     string;
  municipio:  string;
  colonia:    string;
  calle:      string;
  cp:         number;
  latitud:    string;
  longitud:   string;
  createdat:  string;
  updatedat:  string;
}

export interface Total {
  count: string;
}
