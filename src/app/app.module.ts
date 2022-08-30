import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParteSuperiorComponent } from './parte-superior/parte-superior.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParteSuperiorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
