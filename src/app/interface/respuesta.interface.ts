import { Cliente } from "./clientes.interface";

export  interface respuesta
{
  cliente: Cliente[]
}


export interface respuesta_serve {
  msg: String,
  id: String
}
