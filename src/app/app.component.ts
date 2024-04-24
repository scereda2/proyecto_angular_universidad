import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClienteService } from './shared/cliente.service';
import { ProductosService } from './shared/productos.service';
import { CategoriasService } from './categorias.service';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, RouterLink, NavBarComponent]
})
export class AppComponent {
  // title = 'app_curso1';
  // public cliente: any= [];
  // lista:Cliente[]=[];
  // productos: any[]=[];
  // categorias: any[]=[];

  // private readonly productoService = inject(ProductosService);
  // private readonly categoriaService = inject(CategoriasService);

  // constructor(private clienteService$ : ClienteService){
   
  // }

  // ngOnInit(): void{
  //   this.lista = this.clienteService$.getClietes();
  //   this.productoService.getProductos().subscribe(productosObs => {
      
  //     this.productos = productosObs;
  //   });

  //   this.categoriaService.getCategorias().subscribe(categoriasObs => {
  //     console.log(categoriasObs)
  //     this.categorias = categoriasObs;
  //   });
    
  // }

  // agregarElemento(){
    
  //     this.clienteService$.addCliente(this.cliente);
  //     this.cliente='';
    
  // }

}
