import { Injectable } from '@angular/core';
import {Employee}from './../models/employee.model';
import{Observable} from 'rxjs';
import{of} from 'rxjs';
//import { delay } from 'rxjs/internal/operators';
import { mapTo, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employees:Employee[]=[
    {
      id:1,
      name:'sundar',  
      gender:'male',
      email:'msundarcse@gmail.com',      
      contact:'Email',
      dataofbirth:new Date('2012/09/11'),
      department:"1",
      isActive:true,
      photopath:'assets/images/pic03.jpg'
   },
   {
    id:2,
    name:'suresh',  
    gender:'male',
    email:'rajkumar@gmail.com',      
    contact:'Email',
    dataofbirth:new Date('2012/09/11'),
    department:"2",
    isActive:true,
    photopath:'assets/images/pic04.jpg'
 },

   {
    id:3,
    name:'ramesh',
    gender:'male',
    email:'msundarcse@gmail.com',
    phone:9750266345,
    contact:'phoneNumber',
    dataofbirth:new Date('2014/09/10'),
    department:"2",
    isActive:true,
    photopath:'assets/images/pic02.jpg'
 }];
  
  constructor() { }

get():Observable<Employee[]>{
  return  of(this.employees).pipe(delay(3000));
}

save(emp:Employee){
  this.employees.push(emp);
}

getemployee(id:number){
  return this.employees.find(x=>x.id===id);
}

}
