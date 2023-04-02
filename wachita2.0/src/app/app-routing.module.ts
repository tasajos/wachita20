import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { AgregarwachitaComponent } from './Components/agregarwachita/agregarwachita.component';
import { IuloginComponent } from './Components/iulogin/iulogin.component';

const routes: Routes = [
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:PrincipalComponent},
  {path: 'agregarw', component:AgregarwachitaComponent},
  {path: 'login', component:IuloginComponent},
  //{path: 'verwachita/:id', component:VerWachitaComponent},
  //{path: 'seguimienton', component:SeguimientonComponent},
  //{path: 'seguimientov', component:SeguimientovComponent},
  //{path: 'maternidad', component:MaternidadComponent},
  //{path: 'facturacion', component:FacturacionComponent},
  //{path: '**', redirectTo: 'principal', pathMatch:'full'},
  {path: '**', redirectTo: 'principal', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
