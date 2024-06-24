import { Component, OnDestroy, inject } from '@angular/core';
import { CarritoService } from '../shared/carrito.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductosInterface } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})


export class CarritoComponent implements OnDestroy {

  carritos: ProductosInterface[] = [];
  total: number = 0;
  private carritoSubscripcion: Subscription | undefined;  

  constructor(private readonly carritoService: CarritoService) {}


  ngOnInit(){
    this.carritoService.getCarrito().subscribe(carritosObs => {
      this.carritos = this.carritoService.listaService;
      this.actualizarTotal();
      this.actualizarCarrito();
    });
    console.log("El carrito tiene estos productos: ", this.carritos);
  }

  ngOnDestroy(): void {
      if (this.carritoSubscripcion) {
        this.carritoSubscripcion.unsubscribe();
      }
  }

  actualizarTotal(){
    this.total = this.carritos.reduce((acc, carrito) => acc + carrito.price, 0);
  }

  private actualizarCarrito(){
    this.carritos= this.carritoService.listaService;
    
  }
  
  eliminarDelCarrito(id : number){
    this.carritoService.eliminarProductoDelCarrito(id).subscribe(()=>{
      this.carritos = this.carritos.filter(carrito => carrito.id !== id);
      this.actualizarTotal();
    });
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito();
    this.carritos= [];
    this.actualizarTotal();
  }
  
}