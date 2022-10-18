import { Component, Input, OnInit } from '@angular/core';
import { Contact, contactos } from 'src/app/Core/Interfaces/contacts';

@Component({
  selector: 'app-tarjeta-contacto',
  templateUrl: './tarjeta-contacto.component.html',
  styleUrls: ['./tarjeta-contacto.component.scss']
})
export class TarjetaContactoComponent implements OnInit {
Contactos: any;
// contact: any;

  constructor() { }

  @Input() contact:Contact = {} as Contact;

  ngOnInit(): void {
  }

}
