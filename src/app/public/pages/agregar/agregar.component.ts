import { Component, OnInit } from '@angular/core';
import { iAuthRequest } from 'src/app/Core/Interfaces/auth';
import { AuthService } from 'src/app/Core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ContactServicesService } from '../../../Core/services/contact-services';
import { Contact } from 'src/app/Core/Interfaces/contacts';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})

// export class AgregarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class AgregarComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, private us:ContactServicesService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //Hecho usando NgModel
  authData:iAuthRequest = {
    userName : "",
    password : ""
  };

  contact:Contact = {
    id: 0,
    CelularNumber: '',
    description: '',
    email: '',
    first_name: '',
    last_name: '',
    TelephoneNumber: ''

  };


  async agregar(form:NgForm){
    //Valor del formulario para no usar NgModel
    /* console.log(form.value);
    const token = await this.auth.login(form.value);
    if(token) this.router.navigate(['']); */

    debugger;

    this.us.AddContact(this.contact);
  }

}

