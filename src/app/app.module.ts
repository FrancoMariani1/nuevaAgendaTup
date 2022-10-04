import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { TarjetaContactoComponent } from './public/components/tarjeta-contacto/tarjeta-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // TarjetaContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
