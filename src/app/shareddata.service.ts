import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable} from 'rxjs';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  public arrdata:any[]=[];
  data:string="sundaram";
  public share=new BehaviorSubject<any>("0");
  public asobs=this.share.asObservable();
  
  constructor() {
    
   }

  set(value){
    console.log(value);
    //console.log(value);
   
    //this.arrdata.push(value);
    this.share.next(value);
    //console.log(this.arrdata);
  }
   
  get():Observable<any[]>{
   return this.asobs;
   // return 
  }

}
