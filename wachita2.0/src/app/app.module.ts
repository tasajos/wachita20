import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { IuloginComponent } from './Components/iulogin/iulogin.component';
import { AgregarwachitaComponent } from './Components/agregarwachita/agregarwachita.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ListarComponent } from './Components/listar/listar.component';
import { VisualComponent } from './Components/visual/visual.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from "@angular/fire/compat";
import { FIREBASE_OPTIONS } from '@angular/fire/compat';





@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    IuloginComponent,
    AgregarwachitaComponent,
    NavbarComponent,
    ListarComponent,
    VisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
