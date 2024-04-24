import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listaService:any[]=[];
  private readonly _http = inject(HttpClient);
  constructor(){}
  
  getClientes(): Observable<any[]>{
    return this._http.get<any[]>('https://fakestoreapi.com/users');
  }

}
