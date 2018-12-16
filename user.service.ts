import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


loginAuth(data:any):Observable<any>{
  console.log(data);
  return this.http.post('http://localhost:3000/login',data);
}

RegisterAuth(data:any):Observable<any>{
  console.log(data);
  return this.http.post('http://localhost:3000/register',data);
}

isLogged(){
  //console.log(localStorage.getItem('token'));
  let token=JSON.parse(localStorage.getItem('token'));
  //console.log(token[0]._id);
  if(token !=null && token.length>0){
    let tokenid=token[0]._id;
    return !!tokenid;
  } 
  else
  return false;

}

getToken()
{
  return JSON.parse(localStorage.getItem('token'));
}



logout(){
  return localStorage.removeItem('token');
}

}