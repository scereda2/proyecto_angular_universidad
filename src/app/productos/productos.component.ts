import { Component, OnDestroy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../shared/productos.service';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../shared/carrito.service';
import { ProductosInterface } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnDestroy{

  title = 'app_curso1';
  productos: ProductosInterface[]=[];
  expandedState:{[key: number]: boolean} = {};
private productosSubscripcion: Subscription | undefined;

  private readonly productoService = inject(ProductosService);
  private readonly carritoService = inject(CarritoService);

  constructor(){}


  ngOnInit(){
    this.productosSubscripcion=
    this.productoService.getProductos().subscribe((productosObs: ProductosInterface[]) => {
      this.productos=productosObs;
    });

  }
  ngOnDestroy(): void {
    if (this.productosSubscripcion) {
      this.productosSubscripcion.unsubscribe();
    }
  }

  toggleExpand(id: number){
    this.expandedState[id]=!this.expandedState[id];
  }

  agregarAlCarrito(producto: ProductosInterface){
    this.carritoService.agregarAlCarrito(producto);
    alert("Producto Añadido");
  }


}
