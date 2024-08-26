import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import JobData from '../../data/job.json';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent implements OnInit {
  jobData = JobData;

  employee: any;
  applies: any;
  httpClient = inject(HttpClient);
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras.state?.['employee'];
  }

  ngOnInit(): void {
    console.log(this.employee);

    this.httpClient
      .get(`${environment.apiUrl}/administrative/applies/${this.employee.id}`)
      .subscribe({
        next: (data: any) => {
          this.applies = data;
          console.log(data);
        },
        error: (err: any) => console.error(err),
      });
  }
}
