import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import{UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userinf:any[]=[];
  constructor(private route:Router,private user:UserService) { }

  ngOnInit() {
   this.userinf=this.user.getToken();
   console.log(this.userinf);
  }

logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);   
  }

}
