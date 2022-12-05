import { Component, OnInit } from '@angular/core';
import { iAuthRequest } from 'src/app/Core/Interfaces/auth';
import { AuthService } from 'src/app/Core/services/auth..services';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss']
})

export class IniciarComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  //Hecho usando NgModel
  authData:iAuthRequest = {
    UserName : "",
    Password : ""
  };


  async agregar(form:NgForm){
    //Valor del formulario para no usar NgModel
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if(token) this.router.navigate(['']);
  }

  login(form:NgForm){

  }

}
