import { Component, OnInit } from '@angular/core';

import { Contact, contactos } from 'src/app/Core/Interfaces/contacts';
import { UserServicesService } from 'src/app/Core/services/user-services.service';




@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  contactos:Contact[] = contactos;

  constructor(private us:UserServicesService) { }

contactosFalsos = contactos

  ngOnInit(): void {
  //   this.getData() 
  // }

  // async getData(){
  //   this.contactos = await this.us.getUsers();
  // }

  }  
}