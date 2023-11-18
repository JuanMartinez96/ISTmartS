import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interface/clientes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent implements OnInit{
  public clientes: Cliente[] | undefined;
  public cliente:Cliente =
  {
    
      "nombre": "",
      "telefono":  "",
      "email": "",
      "estado":  "Jalisco",
      "municipio":  "Monterrey",
      "colonia": "col",
      "calle": "cal",
      "cp":  0,
      "latitud":  34,
      "longitud":  13

  }

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
    ){}

    ngOnInit(): void {
      this.clientesService.getClientes()
      .subscribe( clientes => this.clientes = clientes.clientes );
  }

  public clienteForm = new FormGroup({
    nombreApellido: new FormControl<String>(''),
    telefono:  new FormControl<String>(''),
    correo:      new FormControl<String>(''),
    estado:    new FormControl<String>(''),
    municipio:  new FormControl<String>(''),
    cp:         new FormControl<String>('')
  })

onSubmit():void{
      let valor = this.clienteForm.value;
      let cliente2:Cliente =
      {

        "nombre": "jona",
        "telefono": "4777654321",
        "email": "jonathan69@example.com",
        "estado": "Sonora",
        "municipio": "Hermosillo",
        "colonia": "Brisas del lago",
        "calle": "Laguna de Chacagua",
        "cp":15151,
        "latitud": 12.15154,
        "longitud": 84.54151
      }
      console.log(cliente2);

      this.clientesService.addCliente(cliente2).
        subscribe( x =>
          console.log(x)
           );



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
