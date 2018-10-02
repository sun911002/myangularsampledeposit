import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {MyService}from './../my.service';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  amount:any;
  reason:any;
  public credentials:User= {
    amount:"myusername",
    reason:"my password",
    date:"mydate"
   };
   
   
   data:any;
   show:boolean=false;
   dep:any[];
   today:any;
   Damount:number=5000;


  constructor(private myservice:MyService) { 
    //this.data=myservice.getuser().subscribe(credentials => this.credentials=credentials);    
    //console.log(this.data);
   
   //console.log(this.credentials);
    this.dep=[];
  }

  ngOnInit() {
  }

  deposit():void{
   this.today=Date.now();
    this.credentials= {
      amount:this.amount,
      reason:this.reason,
      date:this.today
     } 
     console.log(this.credentials);
      console.log("i clicked");
    this.myservice.setuser(this.credentials);
    this.Damount=this.Damount+this.amount;
    this.amount=null;
    this.reason=null;
    }
  
  credit():void{
    this.show=true;
    //this.data=this.myservice.getuser().subscribe(credentials => this.credentials=credentials);
    this.myservice.getuser().subscribe(data=>this.data=data);
    this.dep.push(this.data);
    console.log(this.data);
  }

}
