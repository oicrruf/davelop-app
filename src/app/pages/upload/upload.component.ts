import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../auth.service';
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
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ReactiveFormsModule,
    RouterLinkWithHref,
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  public data: any;
  public httpClient = inject(HttpClient);
  public formData = new FormData();
  public sendTo: string = '';
  public upload: FormGroup = new FormGroup({
    source: new FormControl(''),
    file: new FormControl(''),
  });

  public httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  get f(): { [key: string]: AbstractControl } {
    return this.upload.controls;
  }

  onSourceSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    this.sendTo = target.value;
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: FileList | null = target.files;

    if (file!.length > 0 && file !== null) {
      Array.prototype.forEach.call(file, (f: File) => {
        this.formData.append('file', f);
      });
    }
  }

  ngOnInit(): void {
    this.upload = this.formBuilder.group({
      source: ['', [Validators.required]],
      file: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.result = signal('');

    this.submitted = signal(true);

    if (this.upload.invalid) {
      return;
    }

    this.httpClient
      .post(`${environment.apiUrl}/${this.sendTo}/import`, this.formData, {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.authService.getToken()}`
        ),
      })
      .subscribe({
        next: (data: any) => {
          this.result = signal(data.count);
          this.onReset();
        },
        error: (err: any) => {
          this.submitted = signal(false);
          this.responseError = signal(err.error.message);
          this.errorInFile = signal(true);
        },
      });
  }

  onReset(): void {
    this.submitted = signal(false);
    this.upload.reset({ source: '' });
  }

  errorInFile = signal(false);
  result = signal('');
  submitted = signal(false);
  responseError = signal('');
  errors = signal({
    source: {
      required: 'El tipo de archivo a subir es requerido',
    },
    file: { required: 'El archivo es requerido' },
  });
}
