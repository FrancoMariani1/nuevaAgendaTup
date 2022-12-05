import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/Core/Interfaces/auth';
import { AuthService } from 'src/app/Core/services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  authData:iAuthRequest={
    UserName : "",
    Password : "",
  }

  async registrarse(form:NgForm){
    console.log(form.value);
    const token = await this.auth.registrarse(form.value);
    if(token) this.router.navigate(['']);
  }

}
