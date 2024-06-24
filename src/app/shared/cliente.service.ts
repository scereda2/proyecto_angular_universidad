import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioInterface } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listaService:UsuarioInterface[]=[];
  private readonly _http = inject(HttpClient);
  constructor(){}
  
  getClientes(): Observable<UsuarioInterface[]>{
    return this._http.get<UsuarioInterface[]>('https://fakestoreapi.com/users');
  }

}
