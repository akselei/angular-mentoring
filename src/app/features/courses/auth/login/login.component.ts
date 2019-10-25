import { Component, OnInit } from '@angular/core';
import { IUser, User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  users: IUser[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Dou'
    }
  ];

  user: any = this.users[0];

  constructor() { }

  ngOnInit() {

  }
}
