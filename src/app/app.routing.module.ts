import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetComponent } from './forget-password/app.forget';

import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { HeaderComponent} from "./header/header.component";

const routes:Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forget',component:ForgetComponent},
    {
        path:'',component:HeaderComponent
    }
    


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }