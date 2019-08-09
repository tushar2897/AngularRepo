import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product;
  toggle:boolean;

@Output()
productEmitter= new EventEmitter<Product>();

  constructor(private productService:ProductService) { 
  this.product=new Product();
  this.toggle=true;

  }
  ngOnInit() {
   
  }
  
add(){
  this.productEmitter.emit(this.product);
  this.productService.addNewProduct(this.product).subscribe();
}
checktoggle(){
  this.toggle=!(this.toggle);
}
}
