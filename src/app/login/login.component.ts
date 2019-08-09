import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  validate(){
    console.log(this.user);
  }
  constructor() {
    this.user=new User();
   }
  ngOnInit() {
  }

}
