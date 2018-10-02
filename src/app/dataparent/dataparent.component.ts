import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
//import{Subject} from 'rxjs'; 
import {ShareddataService} from'./../shareddata.service';
import {BehaviorSubject,Subject,Observable,Subscription} from 'rxjs';
//import {Subscription } from 'rxjs/Subscription';
import { DatachildComponent } from './../datachild/datachild.component';


@Component({
  selector: 'app-dataparent',
  templateUrl: './dataparent.component.html',
  styleUrls: ['./dataparent.component.css']
})
export class DataparentComponent implements OnInit,AfterViewInit {

  show=false;
  data:any;
  data1:any;
  parentdata:any[]=[];
  parentdata1:string[]=[];
  message:string=null;
  subscription: Subscription;
  objectkeys=Object.keys;
  

@ViewChild(DatachildComponent) child;


ngAfterViewInit(){
  
  this.message=this.child.message;
  this.show=true;
}

  constructor(public service:ShareddataService) { }

  ngOnInit() {
   // this.service.get().subscribe((data)=>{
     // console.log(data);
      //this.message=data});
    //console.log(this.message); 
   

  }
  send():void{
    //this.parentdata.push(this.data);
    this.service.set(this.data);
    //this.data=null;
 //this.parentdata.push(this.data);
 //this.data=null;
 //console.log(this.parentdata);
  }

 get(){
 
      this.service.get().subscribe((data)=>{
      this.message=this.data});
  console.log(this.message);

  }


receive($event):void{
  
  this.data1=$event.target.value;
  console.log(this.data1);
  this.parentdata1.push(this.data1);
}

}
