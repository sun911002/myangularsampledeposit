import { Component,OnInit } from '@angular/core';
import {ActivatedRoute}from'@angular/router';
import{Employee}from'./../../models/employee.model';
import { EmployeeServiceService } from 'src/app/employee/employee-service.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id:number;
  employee:Employee;
  employee1:Employee[];
  constructor(private myservie:EmployeeServiceService,private _activeroute:ActivatedRoute,private _route:Router) {}
   ngOnInit() {

  this._activeroute.params.subscribe(params=>{
     this.id=+params['id'];
     this.employee=this.myservie.getemployee(this.id);

   });  
   //this.id=+this._activeroute.snapshot.paramMap.get('id');
   console.log(this.id);
  //console.log(this.id);
   this.myservie.get().subscribe(emplist=>this.employee1=emplist);
  console.log(this.employee1);
  //console.log(this.employee); 
  
  //this.employee=this.employee1.find(x=>x.id===this.id);
  //this.employee=this.myservie.getemployee(this.id);
  console.log(this.employee);
    }

  Next(){
  this.id=this.id+1;
  this._route.navigate(['/employee',this.id],{queryParamsHandling:"preserve"});
    }



}
