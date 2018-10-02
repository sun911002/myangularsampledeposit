import { Component, OnInit } from '@angular/core';
import{MyService} from './../my.service';
import { Product } from './../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  constructor(private myservice:MyService) { 

  }
 
  ngOnInit() {

    this.products=this.myservice.getproducts();
  console.log(this.products);
  }

}
