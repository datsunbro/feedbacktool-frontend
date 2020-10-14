import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const header = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: 'http://localhost:3000';

  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`http://localhost:3000/login`, { email, password}, { headers: header } );
  }

  logout() {
    sessionStorage.removeItem('token');
    return true;
  }
}
