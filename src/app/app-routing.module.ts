import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget-password/app.forget';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { AboueComponent } from './aboue/aboue.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget',component:ForgetComponent},
  {
    path:'',component:HeaderComponent
  },
  {
    path:'games',component:GamesComponent
  },
  {
    path:'About',component:AboueComponent
  }

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
