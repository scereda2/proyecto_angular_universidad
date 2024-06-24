import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosInterface } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  listaService:ProductosInterface[]=[];
  private readonly _http = inject(HttpClient);
  constructor() { }
  
  getProductos(): Observable<ProductosInterface[]>{
    return this._http.get<ProductosInterface[]>('https://fakestoreapi.com/products');
   }
  
}
