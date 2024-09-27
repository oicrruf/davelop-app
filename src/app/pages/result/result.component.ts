import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../auth.service';
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
  applies: any = [];

  administrative: any = [];
  commercial: any = [];
  httpClient = inject(HttpClient);

  constructor(private userInfo: AuthService, private titleService: Title) {
    this.employee = JSON.parse(this.userInfo.getEmployeeInfo() || '');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Tus Aplicaciones | GPS para el Desarrollo');
    const administrative = this.httpClient.get(
      `${environment.apiUrl}/administrative/applies/${this.employee.id}`
    );
    const commercial = this.httpClient.get(
      `${environment.apiUrl}/commercial/applies/${this.employee.id}`
    );

    forkJoin([administrative, commercial]).subscribe((results) => {
      this.administrative = results[0];
      this.commercial = results[1];
    });
  }
}
