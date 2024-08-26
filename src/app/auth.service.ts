import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.autoSignIn();
  }

  autoSignIn() {
    if (localStorage.getItem('@user')) {
      this.isAuth.next(true);
      this.router.navigate(['/aplicaciones']);
    }
  }

  result(user: any) {
    sessionStorage.setItem('@user', JSON.stringify(user));
    this.isAuth.next(true);
    this.router.navigate(['/aplicaciones']);
  }

  // signOut() {
  //   this.isAuth.next(false);
  //   this.router.navigate(['']);
  // }

  getToken(): string | null {
    if (localStorage.getItem('@user')) {
      return localStorage.getItem('@user');
    } else return null;
  }
}
