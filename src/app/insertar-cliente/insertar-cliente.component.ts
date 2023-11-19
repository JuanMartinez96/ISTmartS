import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interface/clientes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UbicacionCoordenadas, UbicacionDatos } from '../interface/ubicacion.interface';


@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent implements OnInit{
  public clientes: Cliente[] | undefined;
  public str_estado:string = '';
  public str_municipio:string = '';

  constructor(private clientesService: ClientesService,private route: ActivatedRoute,private fb: FormBuilder,private router: Router){}
  ngOnInit(): void {
    this.clientesService.getClientes().subscribe( clientes => {
      this.clientes = clientes.clientes;
      this.str_estado =  clientes.clientes[0].estado;
      this.str_municipio =  clientes.clientes[0].municipio;
    });

  }

  

  onSubmit():void{
    
    if (this.myForm.valid) {
      // console.log(this.myForm.get("nombreApellido")?.value);
      const ubicacion:UbicacionDatos = {
        estado: this.myForm.get("estado")?.value,
        municipio: this.myForm.get("municipio")?.value,
        colonia: "",
        calle: ""
      }
      
      this.clientesService.addUbucacion(ubicacion).subscribe(x =>{
        var datos = {
          nombre: this.myForm.get("nombreApellido")?.value,
          telefono: this.myForm.get("telefono")?.value,
          email: this.myForm.get("correo")?.value,

          estado: this.myForm.get("estado")?.value,
          municipio: this.myForm.get("municipio")?.value,
          colonia: "Colonia",
          calle: "Calle",
          cp: this.myForm.get("cp")?.value,
          latitud: x.latitud,
          longitud: x.longitud
        }
        console.log(datos);
        
        this.clientesService.addCliente(datos).subscribe(x =>{
          console.log(x);
        });
      });

    }else{
      console.error('Los datos del cliente no son válidos.');
      return;
    }
  }

  onChangEstado(event: any): void {
    // console.log(this.myForm.get("estado")?.value);
  }
  onChangMunicipio(event: any): void {
    // console.log(this.myForm.get("municipio")?.value);
  }

  public myForm: FormGroup = this.fb.group({
    nombreApellido: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    telefono: ['', [Validators.required, Validators.minLength(10)]],
    correo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],

    estado:[this.str_estado],
    municipio:[this.str_municipio],

    cp: ['00000', [Validators.required,  Validators.maxLength(5),Validators.minLength(5)]],
  });

}
