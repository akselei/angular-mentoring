import { Component, OnInit } from '@angular/core';
import { IUser, User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const user: IUser = new User('John', 'Dou', 1);
  }
}
