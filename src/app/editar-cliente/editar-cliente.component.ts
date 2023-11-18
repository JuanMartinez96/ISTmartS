import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente, Clientes } from '../interface/clientes.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  public clientes: Cliente[] | undefined;
  public cliente_pa_editar:Cliente | undefined;
  public id: number = 0;
  public vacio:String ="";
  constructor(
    private clientesService: ClientesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ){}

    ngOnInit(): void {
        this.clientesService.getClientes()
        .subscribe( clientes => this.clientes = clientes.clientes );

        this.route.params.subscribe(params => {
          this.id =params['id'];
        });

      this.clientesService.getClientesOne(this.id).
        subscribe(  c => {
          let lat = parseInt(c.cliente[0].latitud+"");
          let lon = parseInt(c.cliente[0].longitud+"");
          this.cliente_pa_editar = c.cliente[0];

          this.cliente_pa_editar.latitud = lat;
          this.cliente_pa_editar.longitud = lon;

        });
    }

    public clienteForm = new FormGroup({
      nombreApellido: new FormControl<String>(''),
      telefono:  new FormControl<String>(''),
      correo:      new FormControl<String>(''),
      estado:    new FormControl<String>(''),
      municipio:  new FormControl<String>(''),
      cp:         new FormControl<String>('')
    })


    onSubmit(): void {
      if (!this.cliente_pa_editar || !this.cliente_pa_editar.id_cliente) {
        console.error('El cliente o el id_cliente no son válidos.');
        return;
      }

      this.clientesService.updateCliente(this.cliente_pa_editar)
        .subscribe(updatedCliente => {
          console.log(this.cliente_pa_editar)
          console.log('Cliente actualizado:', updatedCliente);

        });
    }

    public myForm: FormGroup = this.fb.group({
      nombreApellido: [' ', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      correo: [' ', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      fecha: [' ', Validators.required],
      referencias: [' ', [Validators.required, Validators.minLength(1), Validators.maxLength(4)], []],
      estado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      municipio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      colonia: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      calle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      cp: ['', [Validators.required,  Validators.maxLength(1)]],
    });



}
