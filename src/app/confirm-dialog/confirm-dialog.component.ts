import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  confirmar(): void {
    this.dialogRef.close(true); // Cierra el diálogo con un valor booleano `true`
  }

  cancelar(): void {
    this.dialogRef.close(false); // Cierra el diálogo con un valor booleano `false`
  }
}
