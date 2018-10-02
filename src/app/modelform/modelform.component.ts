import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl}from '@angular/forms';
import {MyService} from './../my.service';
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

   form;
   name:string;
   rollno:string;
   data:string;
   arrform:any[];
   objectKeys = Object.keys;
  // obj={name:"sundar",rollno:"45"};
   show:boolean=false;
  constructor(private newService:MyService) { }

  ngOnInit() {
    this.form=new FormGroup({
      decimal:new FormControl(),
      binary:new FormControl(),
      octal:new FormControl()
          });

          //this.data=this.newService.fetchdata().Subscribe((data)=>console.log(data));
          //console.log(data);
          console.log(this.newService.fetchdata());
        //this.name=this.newService.obj.name;
        //this.rollno=this.newService.obj.rollno;
        //this.ne wService.obj.name=this.form.decimal;
        //this.newService.obj.rollno=this.form.binary;
        //this.userId=this.newService
    }
  submit=function(user){
    this.show=true;
    console.log(user);
    //this.newService.obj.name=this.form.decimal;
    //this.newService.obj.rollno=this.form.binary;
    this.obj={"name":user.binary,"rollno":user.decimal,"subject":user.octal};
    console.log(this.obj);
    //this.arrform.push({"name":user.binary,"rollno":user.decimal,"subject":user.octal});
    //this.arrform=this.obj;
    //console.log(this.arrform);
     }
  decimalchange=function(oldvalue,newvalue){
    console.log(newvalue);
    if(this.newvalue !=='')
    {
    this.form.patchValue({binary:parseInt(newvalue,10).toString(2)}),
    this.form.patchValue({octal:parseInt(newvalue,10).toString(8)}),
    this.form.patchValue({hexa:parseInt(newvalue,10).toString(16).toUpperCase()});
    }
    else
    {
    this.form.patchValue({binary:""});
    this.form.patchValue({octal:""});
    this.form.patchValue({hexa:""});
    }

  }
b=0;
o=0;
h=0;

  binarychange=function(oldvalue,newvalue)
  {
    console.log(newvalue);
    this.b=this.b+1;
    if(this.b==1)
    {
    if(oldvalue !=='')
    {
    this.form.patchValue({decimal:parseInt(newvalue,2).toString(10)});
    }
     else 
    {
     this.form.patchValue({decimal:""});
    }
    this.b=0;
    }
    
  
  }
}
