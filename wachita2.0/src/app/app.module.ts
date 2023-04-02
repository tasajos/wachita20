import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { IuloginComponent } from './Components/iulogin/iulogin.component';
import { AgregarwachitaComponent } from './Components/agregarwachita/agregarwachita.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    IuloginComponent,
    AgregarwachitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
