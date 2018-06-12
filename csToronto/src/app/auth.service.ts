import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:2000/api/register';
  private _loginUrl = 'http://localhost:2000/api/login';
  private _problemUrl = 'http://localhost:2000/api/record';

  constructor(private _http: HttpClient, private _router: Router) { }

  // to register new problem
  registerProblem(problem) {
    return this._http.post<any>(this._problemUrl, problem);
  }
  // to register new user/staff and returns observable
  registerUser(user) {
    return this._http.post<any>(this._registerUrl, user);
  }

  // to login user/staff and returns observable
  loginUser(user) {
    return this._http.post<any>(this._loginUrl, user);
  }

  // to check if the user/staff is logged in or not.
  // returns boolean value
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // to logout ther user
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  // getting token for authentication
  getToken() {
    return localStorage.getItem('token');
  }
}
