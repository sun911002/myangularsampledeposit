import {Component, OnInit,ViewChildren,AfterViewInit,QueryList } from '@angular/core';
import{Employee}from './../models/employee.model';
import{Department} from'../model.department';
import {EmployeeServiceService} from './../employee/employee-service.service';
import { DatePipe } from '@angular/common';
import{Router,ActivatedRoute} from '@angular/router';
import{SearchPipe}from './..//search.pipe';
import {ResoveServiceService} from '../employee/resove-service.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit{

  private _searchterm:string;

  employees:Employee[];
  fileteremployee:Employee[];

  get searchterm():string{
    //console.log(this._searchterm);
    return this._searchterm;
    
  }
 set searchterm(value:string){
  this._searchterm=value;
  this.fileteremployee=this.fileterdata(value);
  //console.log(value);
 }

 fileterdata(search:string){
   //console.log(search);
  return this.employees.filter(employees=>employees.name.toLowerCase().indexOf(search.toLowerCase())!==-1);
 }
  constructor(private route:Router,private actroute:ActivatedRoute)
  {
  this.employees=this.actroute.snapshot.data['emplist'];
  console.log(this.employees);
  if(this.actroute.snapshot.queryParamMap.has('searchTerm'))
  {
  const val1=this.actroute.snapshot.queryParamMap.get('searchTerm');
  //console.log(val1);
  //this.fileteremployee=this.fileterdata(val1);
  this.searchterm=val1;
  }
else
{
  this.fileteremployee=this.employees;
}


  }
  ngOnInit() {
    
    
    console.log("the subscription is "+new Date().toLocaleTimeString());
    
    //this.fileteremployee=this.employees;
   
   //console.log("the subscription is "+new Date().toLocaleTimeString());


    console.log(this.employees);
    }
    
    handleclick(id:number){
      this.route.navigate(['/employee',id],{queryParams:{'searchTerm':this._searchterm,'testvalue':'testValue'}});
    }

    change(){
      this.employees[0].name="ramesh";
     //const newEmployee:Employee[]=Object.assign({},this.employees);
     //newEmployee[0].name="ramesh";
     //this.employees=newEmployee;    
    }
           
    }
  
  

    
     
       
    
  

