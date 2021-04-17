import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    return true;

    // // get the token
    // const token = this.getToken();
    // // return a boolean reflecting whether or not the token is expired
    // // return tokenNotExpired(null, token);
  }
}
