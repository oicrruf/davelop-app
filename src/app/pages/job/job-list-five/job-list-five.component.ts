import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FormComponent } from '../../../components/form/form.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import JobData from '../../../data/job.json'
import { ServicesComponent } from '../../../components/services/services.component';

@Component({
  selector: 'app-job-list-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FormComponent,
    ServicesComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './job-list-five.component.html',
  styleUrl: './job-list-five.component.scss'
})
export class JobListFiveComponent {
jobData = JobData
}
