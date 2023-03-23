import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [

  {
    path:'nuevo-cliente',component:NuevoClienteComponent
  },
  {
    path:'editar/:clienteId',component:EditarClienteComponent
  },
  {
    path:'cliente',component:ClienteComponent
  },
  {
    path:'**',redirectTo:'cliente'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
