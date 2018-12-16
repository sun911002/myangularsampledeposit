import { Injectable } from '@angular/core';
import{Router,CanActivate} from '@angular/router';
import{UserService} from './user.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private route:Router,private user:UserService) { }
  canActivate():boolean{
   if(this.user.isLogged())
   {
     return true;
   }
   else
   this.route.navigateByUrl('/login');
   return false;

  }

  
}

