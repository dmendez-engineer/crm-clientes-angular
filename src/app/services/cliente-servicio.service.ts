import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Cliente} from '../interfaces/Cliente'
import { Resultado } from '../interfaces/Resultado';
import {catchError, map, tap} from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { ResolveEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {

  url:string="http://localhost:3000/clientes";
  constructor(private _http:HttpClient) { }


  public ConsultarClientes():Observable<Cliente[]>{

    return this._http.get<Cliente[]>(this.url);

  }
  public ConsultarUnCliente(id:number){
    return this._http.get<Cliente>(`${this.url}/${id}`);
  }

  public GuardarCliente(cliente:Cliente):Observable<Resultado>{


    const respuesta= this._http.post<Resultado>(this.url,cliente);

    return respuesta;
    /*return this._http.post<Resultado>(this.url,cliente)
    .pipe(
      map(value=>{
        return value.ok;
      }),
      catchError(err=>of(false))
    )
*/
  }
  public EditarCliente(id:number,cliente:Cliente):Observable<Resultado>{

    console.log(cliente);
    return this._http.put<Resultado>(`${this.url}/${id}`,cliente);
    //return this._http.put<Resultado>(this.url,cliente);
  }
  public EliminarCliente(id:number | undefined):Observable<Resultado>{
    return this._http.delete<Resultado>(`${this.url}/${id}`);
  }

}
