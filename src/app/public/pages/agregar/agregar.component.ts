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
export class AgregarComponent  {

  constructor(private auth:AuthService, private router:Router, private us:ContactServicesService) { }
  

  //Hecho usando NgModel
  authData:iAuthRequest = {
    UserName : "",
    Password : ""
  };

  contact:Contact = {
    id: 0,
    CelularNumber: 1,
    Description: '',
    Email: '',
    Name: '',
    LastName: '',
    TelephoneNumber: 2,
  

  };


  async agregar(form:NgForm){
    //Valor del formulario para no usar NgModel
    /* console.log(form.value);
    const token = await this.auth.login(form.value);
    if(token) this.router.navigate(['']); */

    

    this.us.AddContact(this.contact);
  }

}

