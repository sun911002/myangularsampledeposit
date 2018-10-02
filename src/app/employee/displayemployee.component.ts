import { Component, OnInit,Input } from '@angular/core';
import {Employee} from './../models/employee.model';
import{Department} from'../model.department';
import {Subject,Subscribable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {
  
  
  @Input() employee:Employee;
 
  selectedId:number;

  constructor(private _route:ActivatedRoute) {
    //console.log(this.employee);
   }   

   ngOnInit(){
     this.selectedId=+this._route.snapshot.paramMap.get('id');
     console.log(this.selectedId);
   }
 
    

}
 

