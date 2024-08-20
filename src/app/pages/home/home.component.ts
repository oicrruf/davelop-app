import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router // private authService: AuthService
  ) {}

  public data: any;
  // public httpClient = inject(HttpClient);

  public search: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  public httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  ngOnInit(): void {
    this.search = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.search.controls;
  }

  onSubmit(): void {
    this.submitted = signal(true);

    if (this.search.invalid) {
      return;
    }

    // this.httpClient
    //   .post(`${environment.apiUrl}/auth/login`, this.search.value)
    //   .subscribe({
    //     next: (data: any) => {
    //       this.data = data;

    //       // this.router.navigate(['actualizacion-de-informacion/info_personal']);
    //     },
    //     error: (err: any) => {
    //       this.submitted = signal(false);
    //       this.responseError = signal(err.error.message);
    //     },
    //   });
  }

  onReset(): void {
    this.submitted = signal(false);
    this.search.reset();
  }

  submitted = signal(false);
  responseError = signal('');
  errors = signal({
    search: { required: 'Tu nmero de identificación es requerido' },
  });
}
