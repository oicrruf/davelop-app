import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import Candidate from '../../data/candidate.json';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  id: any;
  data: any;
  httpClient = inject(HttpClient);
  application: any;
  userData: any;
  detail: any;
  type: any;

  constructor(private route: ActivatedRoute, private userInfo: AuthService) {}

  ngOnInit(): void {
    if (this.userInfo !== null) {
      let userFromSession = JSON.parse(this.userInfo.getEmployeeInfo() || '');
      this.userData = userFromSession;
    }

    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.queryParams['type'];
    this.httpClient
      .post(`${environment.apiUrl}/${this.type}/apply`, {
        applyHash: this.route.snapshot.params['id'],
      })
      .subscribe({
        next: (data: any) => {
          this.application = data;
        },
        error: (err: any) => console.error(err),
      });
  }
}
