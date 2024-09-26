import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../../../auth.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHomeComponent,
    ReactiveFormsModule,
    RouterLinkWithHref,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  public data: any;
  public httpClient = inject(HttpClient);
  public login: FormGroup = new FormGroup({
    nickname: new FormControl(''),
    password: new FormControl(''),
  });
  public httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  get f(): { [key: string]: AbstractControl } {
    return this.login.controls;
  }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      nickname: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = signal(true);

    if (this.login.invalid) {
      return;
    }
    console.log(this.login.value);
    this.httpClient
      .post(`${environment.apiUrl}/auth/login`, this.login.value)
      .subscribe({
        next: (data: any) => {
          console.log(this.data);
          this.data = data;
          this.authService.signIn(data.access_token);
          this.router.navigate(['/upload']);
        },
        error: (err: any) => {
          this.submitted = signal(false);
          this.responseError = signal(err.error.message);
        },
      });
  }

  onReset(): void {
    this.submitted = signal(false);
    this.login.reset();
  }

  submitted = signal(false);
  responseError = signal('');
  errors = signal({
    nickname: {
      required: 'Tu nickname es requerido',
    },
    password: { required: 'Tu contraseña es requerida' },
  });
}
