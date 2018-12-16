import { Component,OnInit,OnDestroy } from '@angular/core';
import{UserService} from './user.service';
import{Router} from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor(private user:UserService,private route:Router)  {}
ngOnInit() {
  console.log(this.user.isLogged());
   }

   logout(){
     this.user.logout();
     this.route.navigate(['login']);
   }
  




}
