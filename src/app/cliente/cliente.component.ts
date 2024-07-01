import { Component, OnDestroy, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { UsuarioInterface } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnDestroy {

  title = 'app_curso1';
  clientes: UsuarioInterface[]=[];
  selectedCliente: UsuarioInterface | null = null; 
  editForm: FormGroup;
  private usuarioSubscripcion: Subscription | undefined;

  private readonly clienteService = inject(ClienteService);
  private readonly fb = inject(FormBuilder);
  constructor(){
    this.editForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      zipcode: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(){
    this.clienteService.getClientes().subscribe((clientesObs: UsuarioInterface[]) => {
      this.clientes=clientesObs;
    });
  }
  selectCliente(cliente: UsuarioInterface): void {
    this.selectedCliente = { ...cliente };
    this.editForm.patchValue({
      email: this.selectedCliente.email,
      username: this.selectedCliente.username,
      firstname: this.selectedCliente.name.firstname,
      lastname: this.selectedCliente.name.lastname,
      city: this.selectedCliente.address.city,
      street: this.selectedCliente.address.street,
      number: this.selectedCliente.address.number,
      zipcode: this.selectedCliente.address.zipcode,
      phone: this.selectedCliente.phone
    });
  }

  saveChanges(): void {
    if (this.selectedCliente) {
      const updatedCliente = {
        ...this.selectedCliente,
        email: this.editForm.value.email,
        username: this.editForm.value.username,
        name: {
          firstname: this.editForm.value.firstname,
          lastname: this.editForm.value.lastname
        },
        address: {
          city: this.editForm.value.city,
          street: this.editForm.value.street,
          number: this.editForm.value.number,
          zipcode: this.editForm.value.zipcode,
          geolocation: this.editForm.value.geolocation
        },
        phone: this.editForm.value.phone
      };

      const index = this.clientes.findIndex(c => c.id === this.selectedCliente!.id);
      if (index !== -1) {
        this.clientes[index] = updatedCliente;
      }
      this.selectedCliente = null;
      this.editForm.reset();
    }
  }

  cancelEdit(): void {
    this.selectedCliente = null;
    this.editForm.reset();
  }

  ngOnDestroy(): void {
      if (this.usuarioSubscripcion) {
        this.usuarioSubscripcion.unsubscribe();
      }
  }
}



