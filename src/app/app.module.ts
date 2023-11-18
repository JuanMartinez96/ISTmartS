import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UbicacionClientesComponent } from './ubicacion-clientes/ubicacion-clientes.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { InsertarClienteComponent } from './insertar-cliente/insertar-cliente.component';








@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    UbicacionClientesComponent,
    TablaClientesComponent,
    ConfirmDialogComponent,
    EditarClienteComponent,
    InsertarClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
