import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { CustomerMenuComponent } from './customer-menu/customer-menu.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'product-list',
    component: ProductMenuComponent
  },
  {
    path:'customer-list',
    component:CustomerMenuComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'category',
    component:CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forChild(child)],  This is used when there is routing at each child level instead of roots. hence a new module for each child
  exports: [RouterModule]
})
export class AppRoutingModule { }
