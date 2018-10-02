import { Component, OnInit,ViewChild } from '@angular/core';
import {Employee} from './../models/employee.model'
import{NgForm} from'@angular/forms';
import {MyService} from './../my.service';
import{Department} from '../model.department';
import {BsDatepickerConfig}from 'ngx-bootstrap';
import { SelectedValidatorDirective } from './../selected-validator.directive';
import{EmployeeServiceService} from './../employee/employee-service.service';
import{Router,NavigationEnd,Event} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  data:any;
  myarr:any[]=[];
  myarr1:any[]=[];
  objectKeys:any;
  newemloyee:Employee;
  employee:Employee={
    id:null,
    name:null,
    gender:null,
    email:'',
    phone:null,
    contact:null,
    dataofbirth:null,
    department:'select',
    isActive:null,
    photopath:null   
    
  };
 
  previewphoto=false;
  departments:Department[]=[
    {id:1,name:'cse'},
     {id:2,name:'IT desk'},
     {id:3,name:'installation'}       
    ];
    
    isUpdating:boolean = true;

@ViewChild('f') public createform:NgForm;

datapickconfig:Partial<BsDatepickerConfig>;

  //myarr:any;
  constructor(private myservice:MyService,private empservice:EmployeeServiceService,private router:Router) {
   //this.myarr=[];
   this.datapickconfig=Object.assign({},
    {
      containerClass:'theme-blue'   
    });

    
   
  }

   toggle(){
     this.previewphoto=!this.previewphoto;
   }



  ngOnInit() { 
  /*    this.router.events.subscribe(
      (event: Event) => {
             if (event instanceof NavigationEnd) {
                  this.myservice.fetchdata().subscribe(res => this.myarr = res.json());
             }
      });
  */  
    
    this.objectKeys = Object.keys;
  this.myservice.fetchdata().subscribe((res)=>{
    this.myarr=res.json();
    console.log(this.myarr);
    //let mykey=Object.keys(this.myarr);
    //console.log(this.myarr);
    //console.log(mykey);
    //console.log(this.data);
    //this.myarr.push(this.data);
  },
(error)=>{
  alert("error");
});
  //console.log(this.myarr);
  //
  
  }

  submit(employee:Employee):void 
  {
   console.log(this.employee);
   this.newemloyee=Object.assign({},this.employee);
    this.empservice.save(this.newemloyee);
    console.log(this.newemloyee);
    //this.createform.reset();
    //this.createform.form.markAsPristine();
    this.router.navigate(['list']);
  }


}
