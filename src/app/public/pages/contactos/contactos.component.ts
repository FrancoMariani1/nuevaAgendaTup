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
    this.getContacts();
  }  

  async getContacts() {
    //this.contactos = await this.us.getContacts();debugger;
  }

}