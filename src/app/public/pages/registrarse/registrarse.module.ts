import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarseRoutingModule } from './registrarse-routing.module';
import { RegistrarseComponent } from './registrarse.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrarseComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RegistrarseRoutingModule
  ]
})
export class RegistrarseModule { }
