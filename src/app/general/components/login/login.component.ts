import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form', {static: false}) form: NgForm;

  showLogin: boolean = true;
  loginError: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginData: any) {
    console.log(loginData);
    this.authService.login(loginData.email, loginData.password).subscribe(
      (result: any) => {
        console.log(result);
        sessionStorage.setItem('token', result.accessToken);
        this.router.navigate(['topics']);
      },
      error => {
        console.log(error);
        if (error.status === 401) {
          this.loginError = true;
          this.errorMessage = 'Login fehlgeschlagen! Bitte überprüfen Sie Passwort und Benutzernamen!';
        }
      }
      );
    return true;
  }

  toggleLogin() {
    return true;
  }

  sendPasswordReset(test1: any) {
    return true;
  }

}
