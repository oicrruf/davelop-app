import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);
  public canViewResults = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.autoSignIn();
  }

  // signIn(token: string) {
  //   localStorage.setItem('@token', token);
  //   this.isAuth.next(true);
  //   this.router.navigate(['/upload']);
  // }

  // searchStart(token: string) {
  //   localStorage.setItem('@user', token);
  //   this.isAuth.next(true);
  //   this.router.navigate(['/upload']);
  // }

  autoSignIn() {
    if (sessionStorage.getItem('@user')) {
      console.log(1);
      this.canViewResults.next(true);
    }
  }

  result(user: any) {
    sessionStorage.setItem('@user', JSON.stringify(user));
    console.log(2);
    this.canViewResults.next(true);
    this.router.navigate(['/aplicaciones']);
  }

  // signOut() {
  //   this.isAuth.next(false);
  //   this.router.navigate(['']);
  // }

  // getToken(): string | null {
  //   if (localStorage.getItem('@token')) {
  //     return localStorage.getItem('@token');
  //   } else return null;
  // }

  getEmployeeInfo(): string | null {
    if (sessionStorage.getItem('@user')) {
      return sessionStorage.getItem('@user');
    } else return null;
  }
}
