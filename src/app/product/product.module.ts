import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { ProductComponent } from './product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';

const productRoute:Routes =[
  {
    path:'product-list/add-product',
    component:ProductComponent
  },
  {
    path:'product-list/view-product',
    component:ProductListComponent

  },
  {
    path:'product-list/view-product/delete-product',
    component:ProductDeleteComponent
  },
  {
    path:'product-list/view-product/update-product',
    component:ProductUpdateComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(productRoute)
  ]
})

export class ProductModule { }
