import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';

@NgModule({
  
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
  AppComponent,ComponenteComponent
  ]
})
export class AppModule { }
