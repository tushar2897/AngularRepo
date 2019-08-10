import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product:Product;
  @Output()
  productEmitter= new EventEmitter<Product>();
  
  constructor(private productService:ProductService) { 
    this.product=new Product();
  }
  ngOnInit() {
  }
  update(){
    this.productEmitter.emit(this.product);
    this.productService.updateProduct(this.product).subscribe();
  }
}
