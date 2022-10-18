// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { IniciarRoutingModule } from './iniciar-routing.module';
// import { IniciarComponent } from './iniciar.component';
// import { FormsModule } from '@angular/forms';


// @NgModule({
//   declarations: [
//     IniciarComponent
//   ],
//   imports:[
//     CommonModule,
//     IniciarRoutingModule,
//     FormsModule
//   ]

// })
// export class IniciarModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IniciarRoutingModule } from './iniciar-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IniciarComponent } from './iniciar.component';





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
    IniciarComponent
  ],

  imports: [
    CommonModule,
    IniciarRoutingModule,
    FormsModule
  ]
})
export class IniciarModule { }

