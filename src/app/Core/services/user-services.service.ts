import { Injectable } from '@angular/core';
import { TarjetaContactoComponent } from 'src/app/public/components/tarjeta-contacto/tarjeta-contacto.component';
import { Contact, contactos } from '../Interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() { }

  // async getUserDetails(id: number): Promise<Contact> {
  //   const jsonData = await this.getUsers();
  //   const user = jsonData.filter((user) => user.id == id);
  //   return user.length > 0 ? user[0] : {};
  // }

  // async getUsers(): Promise<Contact[]> {
  //   const data = await fetch();
  //   return await data.json();
  // }
}
