import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';

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
  path: '**',
  redirectTo: 'clientes'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
