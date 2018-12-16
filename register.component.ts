import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  res:any;
  constructor(private user:UserService) { }

  ngOnInit() {
  }

  register(form:NgForm){
    console.log(form);
    this.user.RegisterAuth(form).subscribe((res=>{
      this.res=res;
      console.log(this.res);
    }));
    //form.reset();
  }
}
