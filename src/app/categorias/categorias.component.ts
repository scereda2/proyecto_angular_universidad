import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CategoriasService } from '../categorias.service';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  title = 'app_curso1';
 
  productos: any[]=[];
  categorias: any[]=[];

  
  private readonly categoriaService= inject(CategoriasService);

  constructor(){
   
  }

 ngOnInit(): void {
  this.categoriaService.getCategorias().subscribe(categoriasObs => {
    this.categorias= categoriasObs;
  });
 }


}
