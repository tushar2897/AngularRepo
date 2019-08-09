import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  template: `
  <h2>Name of customer is {{customer.name}}</h2>
  <h3>{{customer.name }}'s Birth date is {{customer.birthDate | date:'longDate'}} </h3>
`
  ,
  styles: ['h2{color:blue} h3{color:red}']
})
export class CustomerDetailsComponent implements OnInit {
@Input()
customer:Customer;
  constructor() { }

  ngOnInit() {
  }

}
