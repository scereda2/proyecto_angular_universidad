import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { UsuarioInterface } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnDestroy {

  title = 'app_curso1';
  clientes: UsuarioInterface[]=[];
  private usuarioSubscripcion: Subscription | undefined;

  private readonly clienteService = inject(ClienteService);
  constructor(){}

  ngOnInit(){
    this.clienteService.getClientes().subscribe((clientesObs: UsuarioInterface[]) => {
      this.clientes=clientesObs;
    });
  }
  ngOnDestroy(): void {
      if (this.usuarioSubscripcion) {
        this.usuarioSubscripcion.unsubscribe();
      }
  }

}
