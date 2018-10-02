import{Observable}from 'rxjs';
import { Injectable } from '@angular/core';
import{Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import{Employee}from './../models/employee.model';
import{EmployeeServiceService} from '../employee/employee-service.service';





@Injectable({
  providedIn: 'root'
})
export class ResoveServiceService implements Resolve<Employee[]> {

  constructor(private empservice:EmployeeServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]>
  {
    console.log(this.empservice.get());
   return this.empservice.get();
  }

  

 


  
}
