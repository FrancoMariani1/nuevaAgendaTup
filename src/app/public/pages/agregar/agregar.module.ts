import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarRoutingModule } from './agregar-routing.module';
import { AgregarComponent } from './agregar.component';


import { BrowserModule } from '@angular/platform-browser';





// @NgModule({
//   imports: [
//     BrowserModule,
//     CommonModule,
//     FormsModule,
//     AgregarRoutingModule
//   ],
//   declarations: [
    
//     AgregarComponent,
    
    
//   ]
//   // providers: [],
//   // bootstrap: [ AgregarComponent ]
// })
// export class AgregarModule { }

@NgModule({
  declarations: [
    
    AgregarComponent
  ],
  imports: [
    CommonModule,
    AgregarRoutingModule,
    FormsModule
  ]
})
export class AgregarModule { }
