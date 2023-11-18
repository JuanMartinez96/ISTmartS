import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../interface/clientes.interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{


  public myForm: FormGroup = this.fb.group({
    idCliente: [' ', [Validators.required, Validators.min(1)]],
    nombreApellido: [' ', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    telefono: ['', [Validators.required, Validators.maxLength(10)]],
    correo: [' ', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    fecha: [' ', Validators.required],
    referencias: [' ', [Validators.required, Validators.minLength(1), Validators.maxLength(4)], []],
    estado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    municipio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    colonia: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    calle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    cp: ['', [Validators.required,  Validators.maxLength(1)]],
  });



  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private clientesService: ClientesService,
    ){}

    public clientes: Clientes | undefined;

  ngOnInit(): void {
    this.clientesService.getClientes()
    .subscribe( clientes => this.clientes = clientes );
  }

  onSave():void {

    if (this.myForm.invalid ) {
      this.myForm.markAllAsTouched
      return;
    }

    console.log(this.myForm.value)

    this.myForm.reset()

  }

  abrirDialogoConfirmacion(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.onSave();
        if (this.myForm.invalid ) {
          this.myForm.markAllAsTouched
          return;
        }

        console.log(this.myForm.value)

        this.myForm.reset()

      } else {

        return;
      }



    });
  }
}
