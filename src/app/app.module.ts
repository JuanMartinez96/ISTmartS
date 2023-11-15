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







@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    UbicacionClientesComponent,
    TablaClientesComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
