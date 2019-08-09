import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[]=[
{
  name:"tushar",
  birthDate:new Date(1997,2,28)
},
{
  name:"simran",
  birthDate:new Date(1997,7,16)
},
{
  name:"swapnil",
  birthDate:new Date(1997,4,19)
  }  ];

  constructor() { }

  ngOnInit() {
  }
 addCustomer(customer:Customer){
  let newCustomer=Object.assign({},customer);
  this.customers.push(newCustomer);
 }
}
