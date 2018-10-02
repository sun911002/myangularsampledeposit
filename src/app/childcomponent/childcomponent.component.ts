import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {MyService} from './../my.service';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  default:number=5000;
  /*amount1:number;
  @Input() amount:number;
  @Output() change:EventEmitter<any>=new EventEmitter();*/

  name1:string;
  dep:number;
  constructor(private userService :MyService) { 
    //this.name1=this.data.obj.name;

  }

  ngOnInit() {
    //console.log(this.amount);
    //this.amount1=this.amount;
    //this.userService.cast.subscribe(name1=>this.name1=name1);
   // this.name1=this.userService.user.getValue();
    console.log(this.name1);
  }
  deposit(){
     //this.dep=this.default+this.name1;
     
     //this.change.emit(this.default);
     //this.userService.setuser(this.default);
  }
  /*
  withdraw():any{
    this.default=this.default-this.name1;
    if(this.default<0){
      alert("please enter with in amount")
    }
    else
    {
    //this.change.emit(this.default);
    }
  */
}