import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  public data: any;
  public httpClient = inject(HttpClient);

  public search: FormGroup = new FormGroup({
    dui: new FormControl(''),
  });

  public httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  ngOnInit(): void {
    this.search = this.formBuilder.group({
      dui: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.search.controls;
  }

  onSubmit(): void {
    let dui = Number(this.search.value.dui.replace('-', ''));

    this.submitted = signal(true);

    if (this.search.invalid) {
      return;
    }

    this.httpClient
      .post(`${environment.apiUrl}/employee/find`, { dui: dui.toString() })
      .subscribe({
        next: (data: any) => {
          this.data = data;
          if (this.data !== null) {
            const { dui, email, id, name, position } = this.data;
            this.authService.result({
              id,
              name,
              dui,
              email,
              position,
            });

            this.router.navigate(['aplicaciones'], {
              state: { employee: data },
            });
          } else {
            this.not_found = signal(true);
          }
        },
        error: (err: any) => {
          this.submitted = signal(false);
          this.responseError = signal(err.error.message);
        },
      });
  }

  onReset(): void {
    this.submitted = signal(false);
    this.search.reset();
  }

  not_found = signal(false);
  submitted = signal(false);
  responseError = signal('');
  errors = signal({
    dui: {
      required: 'Tu número de identificación es requerido',
      not_found: 'Tu número de identificación no tiene pruebas registradas',
    },
  });
}
