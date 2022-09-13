import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarRoutingModule } from './iniciar-routing.module';
import { IniciarComponent } from './iniciar.component';


@NgModule({
  declarations: [
    IniciarComponent
  ],
  imports: [
    CommonModule,
    IniciarRoutingModule
  ]
})
export class IniciarModule { }
