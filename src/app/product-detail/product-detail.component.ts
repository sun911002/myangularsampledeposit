import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from'@angular/router';
import{MyService} from './../my.service';
import { Product } from './../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:number;
  product:Product;
  sub;
  constructor(private ActiveRoute:ActivatedRoute,private router:Router,private myservice:MyService) { }
  
  ngOnInit() {
   /* this.id=this.ActiveRoute.snapshot.params['id'];
    console.log(this.id);
    let products=this.myservice.getproducts();
    this.product=products.find(p => p.productID==this.id);
*/
   this.sub=this.ActiveRoute.paramMap.subscribe(params=>{
           this.id=+params.get('id');
           console.log(this.id);
           let products=this.myservice.getproducts();
           this.product=products.find(p=>p.productID==this.id);


   });
  
  }

  back(){
    this.router.navigate(['product']);
  }
  next(){
    
    if(this.id<3)
    {
      this.id=this.id+1;
    }
    else{
      this.id=1;
    }
    console.log(this.id);
    this.router.navigate(['product/detail',this.id]); 

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
