import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget-password/app.forget';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { AboueComponent } from './aboue/aboue.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GameDetails1Component } from './game-details1/game-details1.component';
import { GameDetails2Component } from './game-details2/game-details2.component';
import { GameDetails3Component } from './game-details3/game-details3.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget',component:ForgetComponent},
  {path:'GameDetails',component:GameDetailsComponent},
  {path:'Reviews',component:ReviewsComponent},
  {path:'GameDetails1',component:GameDetails1Component},
  {path:'GameDetails2',component:GameDetails2Component},
  {path:'GameDetails3',component:GameDetails3Component},
  {
    path:'',component:HeaderComponent
  },
  {
    path:'games',component:GamesComponent
  },
  {
    path:'About',component:AboueComponent
  },
  {
    path:'GameDetails',component:GameDetailsComponent
  },
  {
    path:'GameDetails1',component:GameDetails1Component
  },
  {
    path:'GameDetails2',component:GameDetails2Component
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
