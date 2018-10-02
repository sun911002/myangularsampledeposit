import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit {

  Damount:number=5000;
  today:number;
  arr:any;
  amount:number;
  reason:string;
  test:any;
  darr:any[];
  carr:any[];
  marr:any[];
  sarr:any[];
  dearr:any[];
  obj:{};
  obj1:{};


  all:boolean=false;
  spe:boolean=false;
  cre:boolean=false;
  constructor() { }

  ngOnInit() {
    this.darr=[];
    this.carr=[];
    this.marr=[];
    this.sarr=[];
    this.dearr=[];
  }


  deposit():void{
  

  this.today=Date.now();
  if((this.amount==null)||(this.reason==null))
  {
    alert('please fill the amount and reason box')
  }
  else
  {
  this.obj={amount:this.amount,
            reason:this.reason,
            date:this.today
            };
  this.darr.push(this.obj);
  console.log(this.darr);
  this.Damount=this.Damount+this.amount;
  
  this.amount=null;
  this.reason=null;
  }
}

  credit():void
  {
    this.today=Date.now();
    this.obj={amount:this.amount,
              reason:this.reason,
              date:this.today
              };
    
    this.carr.push(this.obj);
    console.log(this.darr);
    this.Damount=this.Damount-this.amount;
    
    this.amount=null;
    this.reason=null;
  }
merge():void{
  this.marr=this.darr.concat(this.carr);
  console.log(this.marr);
  this.all=true;
  this.cre=false;
  this.spe=false;
  }
  spend():void{
    this.cre=false;
    this.all=false;
    this.spe=true;
    console.log("clicked in spend");
    this.sarr=this.carr;
    
     }

credit1():void{
  this.cre=true;
  this.all=false;
  this.spe=false;
   console.log("clicked in credit");
    this.dearr=this.darr;
    
       }
  



}