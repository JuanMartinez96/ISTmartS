import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent {

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
    ){}

  abrirDialogoConfirmacion(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // El usuario confirmó la acción
        console.log('Usuario confirmó la acción');
        // Aquí puedes colocar la lógica para realizar la acción
      } else {
        // El usuario canceló la acción
        console.log('Usuario canceló la acción');
        // Aquí puedes colocar la lógica para manejar la cancelación
      }
    });
  }


}
