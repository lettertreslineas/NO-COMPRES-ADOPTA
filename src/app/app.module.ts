import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParteSuperiorComponent } from './parte-superior/parte-superior.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([{path :'', component: ContenidoComponent},])],
  declarations: [ AppComponent, ParteSuperiorComponent, ContenidoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
