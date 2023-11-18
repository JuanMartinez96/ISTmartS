import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { InsertarClienteComponent } from './insertar-cliente/insertar-cliente.component';

const routes: Routes = [
{
  path: 'clientes',
  component: ClientesComponent
},
{
path: 'tablaClientes',
component: TablaClientesComponent,
},
{
  path: 'editarCliente/:id',
  component: EditarClienteComponent
},
{
  path: 'insertarClientes',
  component: InsertarClienteComponent
},
{
  path: '',
  redirectTo: 'clientes', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
