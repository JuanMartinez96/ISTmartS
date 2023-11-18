import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, pipe } from 'rxjs';
import { Cliente, Clientes } from '../interface/clientes.interface';
import { environments } from 'src/environments/environments';
import { respuesta, respuesta_serve } from '../interface/respuesta.interface';


@Injectable({providedIn: 'root'})
export class ClientesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }


  getClientes():Observable<Clientes>{
    return this.http.get<Clientes>(`${ this.baseUrl}/clientes`);
  }

  getClientesOne(id: number):Observable<respuesta>{
    return this.http.get<respuesta>(`${ this.baseUrl}/clientes/${id}`);
  }
  // getEstados():Observable<Estados>{
  //   return this.http.get<Clientes>(`${ this.baseUrl}/services `);
  // }

  addCliente( cliente: Cliente):Observable<respuesta_serve>{
    return this.http.post<respuesta_serve>(`${this.baseUrl}/clientes`, cliente)
  }

  updateCliente( clientes: Cliente):Observable<Cliente>{
    if(!clientes.id_cliente) throw Error ('El id del cliente es requerido')

    return this.http.put<Cliente>(`${this.baseUrl}/clientes/${clientes.id_cliente}`, clientes);
  }

  getClienteById(id_cliente: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/clientes/${id_cliente}`);
  }

  deleteCliente( id: number):Observable<boolean>{

    return this.http.delete(`${this.baseUrl}/clientes/${ id }`)
    .pipe(
      catchError( err => of (false) ),
      map( resp => true)
    );
  }





}
