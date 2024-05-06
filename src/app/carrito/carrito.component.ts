import { Component, inject } from '@angular/core';
import { CarritoService } from '../shared/carrito.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  carritos: any[] = [];

  constructor(private readonly carritoService: CarritoService) {}

  // private readonly carritoService= inject(CarritoService);

  ngOnInit(){
    this.carritoService.getCarrito().subscribe(carritosObs => {
      this.carritos = this.carritoService.listaService;
      this.actualizarCarrito();
    });
    console.log("El carrito tiene estos productos: ", this.carritos);
  }

  private actualizarCarrito(){
    this.carritos= this.carritoService.listaService;
    
  }
  

  eliminarDelCarrito(id : number){
    this.carritoService.eliminarProductoDelCarrito(id);
    this.carritos = this.carritos.filter(carrito => carrito.id !== id);
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito();
    this.carritos= [];
  }
  
}