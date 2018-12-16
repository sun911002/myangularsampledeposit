import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{UserService} from './user.service';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
//import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import{AuthInteceptorService} from'./auth-inteceptor.service';
//import {UserService} from './user.service';
const app:Routes=[
  {path:'login',component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Home', component:HomeComponent,canActivate:[AuthGuardService]},  
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(app)
  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInteceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
