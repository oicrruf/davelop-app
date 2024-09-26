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

  signIn(token: string) {
    localStorage.setItem('@token', token);
    this.isAuth.next(true);
    this.router.navigate(['/upload']);
  }

  autoSignIn() {
    if (sessionStorage.getItem('@user')) {
      this.canViewResults.next(true);
    }
    if (localStorage.getItem('@token')) {
      this.isAuth.next(true);
      this.router.navigate(['/upload']);
    }
  }

  result(user: any) {
    sessionStorage.setItem('@user', JSON.stringify(user));
    this.canViewResults.next(true);
    this.router.navigate(['/aplicaciones']);
  }

  signOut(): void {
    localStorage.removeItem('@token');
    this.isAuth.next(false);
    this.router.navigate(['']);
  }

  getToken(): string | null {
    if (localStorage.getItem('@token')) {
      return localStorage.getItem('@token');
    } else return null;
  }

  getEmployeeInfo(): string | null {
    if (sessionStorage.getItem('@user')) {
      return sessionStorage.getItem('@user');
    } else return null;
  }
}
