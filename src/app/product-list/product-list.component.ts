import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products:Product[]=[
    {
      productId:1001,
      name:"LED TV",
      brand:"sony",
      price:2000.0  
    },
    {
      productId:1002,
      name:"Microwave",
      brand:"LG",
      price:12000.0  
    },
    {
      productId:1003,
      name:"SmartPhone",
      brand:"Nokia",
      price:15000.0  
    }
    ];

  constructor(private productService:ProductService) {
        
  } 
 
  ngOnInit() {
    this.showProducts();
  }
  addProduct(product){
    let prod=Object.assign({},product);
    this.products.push(prod);

  }
  showProducts(){
    this.productService.getAllProducts().subscribe(data=>this.products=data);
  }

}

