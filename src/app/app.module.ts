import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MainComponent } from './main/main.component';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    NavegacionComponent,
    MainComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
