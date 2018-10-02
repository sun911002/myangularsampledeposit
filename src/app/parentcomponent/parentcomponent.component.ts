import { Component, OnInit } from '@angular/core';
import{  FormsModule} from'@angular/forms';
//import {MyService} from './../my.service';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class  ParentcomponentComponent implements OnInit {

  /*default:number=5000;
  data:number;
  amount:number;
  show:boolean=false;
  sendvalue(value:number){
    console.log(value);
    //this.data=value;
  }
 
  update(value:number){
    this.amount=value;
    this.show=true;
  }
*/
 name1:string;
  constructor() { 
    //this.name1=this.data.obj.name;
    //console.log(this.name1);

  }

  ngOnInit() {
  //this.userService.cast.subscribe(name1=>this.name1=name1);
  console.log(this.name1);
  }
  set(value:number){
    console.log(value);
    //this.userService.setuser(value);
  }

}
