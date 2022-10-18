import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./public/pages/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: "iniciar",
    loadChildren: () => import('./public/pages/iniciar/iniciar.module').then(m => m.IniciarModule)
  },
  {
    path: "registrarse",
    loadChildren: () => import('./public/pages/registrarse/registrarse.module').then(m => m.RegistrarseModule)
  },
  {
    path: "contactos",
    loadChildren: () => import('./public/pages/contactos/contactos.module').then(m => m.ContactosModule)
  },
  {
    path: "agregar",
    loadChildren: () => import('./public/pages/agregar/agregar.module').then(m => m.AgregarModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
