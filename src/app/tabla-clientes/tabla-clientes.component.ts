import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import * as mapboxgl from 'mapbox-gl';
import { Clientes } from '../interface/clientes.interface';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';




(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZWxqdWFuIiwiYSI6ImNsb3h3OWRrbjE4dW4yaXBrOTQwbnVpcTgifQ.yTolcwsR9FaHdpA-yAmoHQ';
@Component({
  selector: 'tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements AfterViewInit, OnInit{
  constructor(
    private dialog: MatDialog,
    private clientesService: ClientesService,
    private router: Router
    ){}

     public clientes: Clientes | undefined;

  ngOnInit(): void {
    this.clientesService.getClientes()
    .subscribe( clientes => this.clientes = clientes );
    this.clientesService.getClientes().subscribe((clientes) => (this.clientes = clientes));
  }

  // abrirDialogoConfirmacion(): void {
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {

  //     } else {

  //       console.log('Usuario canceló la acción');

  //     }
  //   });
  // }

  abrirDialogoEditar(clienteId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/editarCliente', clienteId]); // Ajusta la ruta según tu configuración
      } else {
        // El usuario canceló la acción
        console.log('Usuario canceló la acción');
        // Aquí puedes colocar la lógica para manejar la cancelación
      }
    });
  }


  abrirDialogoEliminar(id : number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientesService.deleteCliente(id).
          subscribe( x => console.log(x) );
      } else {
        console.log('Usuario canceló la acción');

      }
    });
  }

  abrirDialogoInsertar(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/insertarClientes' ]); // Ajusta la ruta según tu configuración
      } else {
        // El usuario canceló la acción
        console.log('Usuario canceló la acción');
        // Aquí puedes colocar la lógica para manejar la cancelación
      }
    });
  }

  abrirDialogoConfirmacion(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si se confirma la acción, exporta a Excel
        this.exportToExcel();
      } else {
        console.log('Usuario canceló la acción');
      }
    });
  }

  abrirDialogoConfirmacionExcel(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si se confirma la acción, exporta a Excel
        this.exportToExcel();
      } else {
        console.log('Usuario canceló la acción');
      }
    });
  }
  exportToExcel(): void {
    const fileName = 'clientes.xlsx';

    // Obtiene la referencia de la tabla
    const element = document.getElementById('tabla-clientes');

    // Verifica si la tabla existe
    if (element) {
      // Convierte la tabla a un libro de Excel
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

      // Crea el libro de Excel
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Clientes');

      // Guarda el archivo
      XLSX.writeFile(wb, fileName);
    } else {
      console.error('No se encontró la tabla con el id "tabla-clientes".');
    }
  }




  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-101.6932, 21.1619], // starting position [lng, lat]
      zoom: 11, // starting zoom
    }
      )}
}
