import { Component, OnInit } from '@angular/core';


import { Contact, contactos } from 'src/app/Core/Interfaces/contacts';
import { ContactServicesService } from 'src/app/Core/services/contact-services';




@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  contactos:Contact[] = [];

  constructor(public us:ContactServicesService) { }

  ngOnInit(): void {
    this.getData();
  }

  // ngOnInit(): void {
  //   this.getContacts();
  // }  

  async getData() {
    const contacto = {
      id: 1,
      Name: "test",
      LastName: "test",
      avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
      Description: "test",
      Email: "test@test.com",
      TelephoneNumber: 123,
      CelularNumber: 123,
      UserName: "prueba1"
    };

    try{
      this.contactos = await this.us.getContacts();
    }

    catch(err) {
      this.contactos = [contacto];
    }

    console.log(this.contactos)
  }

  // async getContacts() {
  //   //this.contactos = await this.us.getContacts();debugger;
  // }

}