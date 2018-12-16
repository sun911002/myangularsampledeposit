import { Component, OnInit, OnDestroy } from '@angular/core';
import{NgForm} from'@angular/forms';
import{Router,ActivatedRoute} from'@angular/router';
import{UserService} from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  islogging;
  res:any[];
  msg:any;
  error1:boolean=false;
  constructor(private user:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  submit(form:NgForm){

   console.log(form);
   this.user.loginAuth(form).subscribe((res:any[])=>{
     //this.res=res;
     //console.log(this.res[0]._id);
     console.log(res);
     

     if(res.length>0)
     {
      let user=JSON.stringify(res);
      localStorage.setItem("token",user);  
      /* if(this.user.isLogged())
       {
       console.log("userLogged In");
       }*/
       if(this.user.isLogged()){
        console.log(this.user.isLogged());
        this.router.navigate(['Home']);
       }
       
    
     }
     else{
       this.error1=true;
       this.msg="invalid login";
     }
   },(error)=>{console.log(error)}
      
   );
   //form.reset();
  }

  

} 
