import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CategoriasService } from '../categorias.service';
import { ProductosInterface } from '../interfaces';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnDestroy {

  title = 'app_curso1';
 
  categorias: ProductosInterface[]=[];
  private categoriaSubscripcion: Subscription | undefined;  

  private readonly categoriaService= inject(CategoriasService);

  constructor(){
   
  }

 ngOnInit(){
  this.categoriaService.getCategorias().subscribe((categoriasObs: ProductosInterface[]) => {
    this.categorias= categoriasObs;
  });
 }

 ngOnDestroy(): void {
     if (this.categoriaSubscripcion) {
      this.categoriaSubscripcion.unsubscribe();
     }
 }

}
