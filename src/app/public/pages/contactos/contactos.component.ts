import { Component, OnInit } from '@angular/core';
import { contactos } from 'src/app/Core/Interfaces/contacts';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  constructor() { }

  contactosFalsos = contactos

  ngOnInit(): void {
  }

}
