import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  template: `
  <h2>Product id : {{product.productId}}</h2>
  <h3> Name : {{product.name | uppercase}}</h3>
  <h3> Brand : {{product.brand}}</h3>
  <h3>Price : {{product.price}}</h3> `,
  styles: ['h2{color:blue;} h3{color:grey;}']
})
export class ProductDetailsComponent implements OnInit {
@Input()
product:Product;
  constructor() { }

  ngOnInit() {
  }

}
