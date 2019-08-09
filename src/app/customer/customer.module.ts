import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';

const customerRoute:Routes=[
{
  path:'customer-list/add-customer',
  component:CustomerComponent
},
{
  path:'customer-list/view-customer',
  component:CustomerListComponent

}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(customerRoute)
  ]
})
export class CustomerModule { }
