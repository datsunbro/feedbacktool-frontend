import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin:boolean = true;
  loginError: boolean;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  login(test: any) {
    return true;
  }

  toggleLogin() {
    return true;
  }

  sendPasswordReset(test1: any) {
    return true;
  }

}
