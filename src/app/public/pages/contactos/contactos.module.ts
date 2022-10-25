import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { TarjetaContactoComponent } from '../../components/tarjeta-contacto/tarjeta-contacto.component';

@NgModule({
  declarations: [
    ContactosComponent,
    TarjetaContactoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ContactosRoutingModule
  ]
})
export class ContactosModule { }
