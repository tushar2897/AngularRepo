import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
product:Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
delete(id:number){
  this.productService.deleteProduct(id).subscribe();
}
}
