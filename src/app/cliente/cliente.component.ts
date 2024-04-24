import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  title = 'app_curso1';
  clientes: any[]=[];

  private readonly clienteService = inject(ClienteService);
  constructor(){}

  ngOnInit(){
    this.clienteService.getClientes().subscribe(clientesObs => {
      this.clientes=clientesObs;
    });
  }

}
