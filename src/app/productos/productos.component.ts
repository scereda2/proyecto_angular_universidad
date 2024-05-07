import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../shared/productos.service';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  title = 'app_curso1';
  productos: any[]=[];
 

  private readonly productoService = inject(ProductosService);
  private readonly carritoService = inject(CarritoService);

  constructor(){}

  ngOnInit(){
    this.productoService.getProductos().subscribe(productosObs => {
      this.productos=productosObs;
      this.productos.forEach(producto => producto.expanded = false);
    });

  }

  agregarAlCarrito(producto: any){
    this.carritoService.agregarAlCarrito(producto);
    alert("Producto Añadido");
  }


}
