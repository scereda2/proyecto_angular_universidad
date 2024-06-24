import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosInterface } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  listaService:ProductosInterface[]=[]
  private readonly _http = inject(HttpClient);
  constructor() { }
  
  getCategorias(): Observable<ProductosInterface[]>{
    return this._http.get<ProductosInterface[]>('https://fakestoreapi.com/products');
   }
  
}
