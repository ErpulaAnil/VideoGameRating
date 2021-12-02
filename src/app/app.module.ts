import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './app.header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetComponent } from './forget-password/app.forget';


import { GamesComponent } from './games/games.component';
import { RateingComponent } from './rateing/rateing.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GameDetails1Component } from './game-details1/game-details1.component';
import { GameDetails2Component } from './game-details2/game-details2.component';
import { GameDetails3Component } from './game-details3/game-details3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ForgetComponent,

  
    GamesComponent,
          RateingComponent,
          GameDetailsComponent,
          ReviewsComponent,
          GameDetails1Component,
          GameDetails2Component,
          GameDetails3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
