import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UbicacionClientesComponent } from './ubicacion-clientes/ubicacion-clientes.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { ButtonModule } from 'primeng/button';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';







@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    UbicacionClientesComponent,
    TablaClientesComponent,
    AlertDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
