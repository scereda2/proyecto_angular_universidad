import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { 
    this.obtenerCarritoDesdeLocalStorage();
  }

  listaService:any[]=[]
  private readonly _http= inject(HttpClient);

  getCarrito(): Observable<any[]> {
    return this._http.get<any[]>('https://fakestoreapi.com/carts');
  }

  

  agregarAlCarrito(producto: any): Observable<any> {
   
    this.listaService.push(producto);
    this.actualizarLocalStorage();
    console.log(this.listaService);
    return this._http.post<any>('https://fakestoreapi.com/carts', producto);
  }

  eliminarProductoDelCarrito(id: number): Observable<any> {
    this.listaService = this.listaService.filter(item => item.id !== id);
    this.actualizarLocalStorage();
    return this._http.delete<any>(`https://fakestoreapi.com/carts/${id}`);
  }

  private actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.listaService));
  }

  private obtenerCarritoDesdeLocalStorage() {
    const carritoJSON = localStorage.getItem('carrito');
    if (carritoJSON) {
      this.listaService = JSON.parse(carritoJSON);
    }
  }
  vaciarCarrito(){
    this.listaService=[];
    this.actualizarLocalStorage();
   }
  
  
}
  
 