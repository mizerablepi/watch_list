import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  checkUser() {
    const cookieArray = window.document.cookie
      .split(';')
      .map((el) => el.trim());
    const tokenString = cookieArray.find(
      (cookie) => cookie.substring(0, 6) == 'token='
    );
    const token = tokenString?.split('=')[1];

    return token;
  }
}
