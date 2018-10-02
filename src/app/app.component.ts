import { Component } from '@angular/core';
import{Router,NavigationStart,NavigationEnd,NavigationError,NavigationCancel,Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadingindicator=true;
  constructor(private _route:Router)
  {

  this._route.events.subscribe((routerevent:Event)=>{

   if(routerevent instanceof NavigationStart){
  this.loadingindicator=true;
   }
    
   if(routerevent instanceof NavigationEnd || routerevent instanceof NavigationError || routerevent instanceof NavigationCancel)
   {
    this.loadingindicator=false;
    }
  });
  
  }
}
