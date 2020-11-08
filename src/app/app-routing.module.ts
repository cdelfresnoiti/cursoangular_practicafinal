import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentesComponent } from './components/agentes/agentes.component';
import { CrearAgenteComponent } from './components/agentes/crear-agente/crear-agente.component';
import { ConfigComponent } from './components/config/config.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'config', component: ConfigComponent},
  {path: 'agentes', component: AgentesComponent, canActivate: [AuthGuard]},
  {path: 'productos', component: ProductosComponent, canActivate: [AuthGuard]},
  {path: 'crear-agente', component: CrearAgenteComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/agentes', pathMatch: 'full'},
  {path: '**', redirectTo: '/agentes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
