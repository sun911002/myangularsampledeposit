import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
//import{BehaviorSubject} from 'rxjs/BehaviourSubject';
import {BehaviorSubject,Observable} from 'rxjs';
import{map} from 'rxjs/operators';
import{Product} from './product';

//import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';



//import 'rxjs/add/operator/map';
//import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
//import { map, filter, switchMap } from 'rxjs/operators';
//import 'rxjs/add/operators/map';


@Injectable({
  providedIn: 'root'
})
export class MyService {
  data1:any;

  private credentials$ = new BehaviorSubject<User>({
    amount: "5000",
    reason: "wedding",
    date:"13-8-16"
});
cast=this.credentials$.asObservable();  


setuser(newuser:User){
  console.log(newuser);
  this.credentials$.next(newuser);
}

getuser():Observable<User>{
  console.log(this.credentials$.asObservable());
  return this.credentials$.asObservable();
}
 
  obj={name:"sundar",rollno:"45"};
  success(){
    return "sucess";
  }


  constructor(private http:Http) { 
  
  }

  fetchdata():Observable<any>{
    //return this.http.get("https://jsonplaceholder.typicde.com/posts").pipe(map(res=>res.json()));
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1");
  }

 public getproducts(){
  
  let products:Product[];

  products=[
       new Product(1,'Memory Card',500),
       new Product(2,'Pen Drive',750),
       new Product(3,'Power Bank',100)
  ];
  
  return products;
 }

public getproduct(id){
  let products:Product[]=this.getproducts();
  return products.find(p=>p.productID===id);
}


 }








 
      
  /*return this.http.get('./assets/data/test.json').
  pipe(map(response=>{
    const data=response.json();
    //console.log(data);
    return data;
  })).subscribe((data)=>{
    this.data1=data;
    console.log(this.data1);
  });*/
  
  
    
    //console.log(this.data1);
  //return this.obj;
     

    