import { Component, OnInit } from '@angular/core';

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
}

export class User implements IUser {
  public id?: number;
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string, id?: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

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
