import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token, LoginView } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://staging.effortless.dk';

  constructor(private http: HttpClient) { }

  login(loginView: LoginView) {
    return this.http.post<Token>(`${this.baseUrl}/api/auth/login`, loginView, httpOptions);
  }
}
