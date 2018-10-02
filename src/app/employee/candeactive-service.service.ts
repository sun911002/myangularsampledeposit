import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import{CreateemployeeComponent} from '../employee/createemployee.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactiveServiceService implements CanDeactivate<CreateemployeeComponent> {

  canDeactivate(component:CreateemployeeComponent):boolean{
  
    if(component.createform.dirty){
      
    return confirm('are u sure u want to leave');
    }
    return true; 

  }




  constructor() { }
}
