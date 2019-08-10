import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
product:Product;
@Output()
productEmitter= new EventEmitter<Product>();

  constructor(private productService:ProductService) { 
    this.product=new Product();
  }
  ngOnInit() {
  }
delete(){
  this.productEmitter.emit(this.product);
  this.productService.deleteProduct(this.product).subscribe();
}
}
