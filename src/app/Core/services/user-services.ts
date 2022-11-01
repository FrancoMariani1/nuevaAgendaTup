import { Injectable } from "@angular/core";
import { User } from '../Interfaces/user'
@Injectable({
    providedIn: 'root'
  })
  export class ContactServicesService{

    constructor() { }

    async getUsers(): Promise<User[]>  {
        /* return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(contactosMock)
          }, 300);
        }); */
    
        const data = await fetch('https://localhost:57688/api/User');
        return await data.json();
      }
    
      async getUser(id: number): Promise<User[]>  {
        const data = await fetch('https://localhost:57688/api/User'+id);
        return await data.json();
      }
    
      async deleteUser(id: number): Promise<boolean>  {
        const res = await fetch('https://localhost:57688/api/User'+id, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
        });
        return res.ok;
      }
    
      async AddUser(c: User): Promise<User>  {
        const res = await fetch('https://localhost:57688/api/User', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(c)
        });
        return res.json();
      }
    
      async UpdateUser(c: User): Promise<User>  {
        const res = await fetch('https://localhost:57688/api/User', {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(c)
        });
        return res.json();
      }



  } 