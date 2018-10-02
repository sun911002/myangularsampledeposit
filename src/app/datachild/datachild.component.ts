import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ShareddataService} from'./../shareddata.service';
import {Subject,Observable,Subscription} from 'rxjs';


@Component({
  selector: 'app-datachild',
  templateUrl: './datachild.component.html',
  styleUrls: ['./datachild.component.css']
})
export class DatachildComponent implements OnInit {
 
  message:string="sundaram";
  data:string;
  test:any[]=[];
  @Input() childdata:any[];

  @Output()  change=new EventEmitter<any>();
  constructor(private service:ShareddataService) { }

  ngOnInit() {
  }

  
  sendtoparent(){
  this.test.push(this.data);
  // console.log(this.test);
   this.change.emit(this.test);

   this.data=null;
  }
  get(){
    /*this.service.get().subscribe((data)=>{
      this.message=data});
      console.log(this.message);
     }
    */}
 


}
