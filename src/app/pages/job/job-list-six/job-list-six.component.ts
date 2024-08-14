import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { JobSidebarComponent } from '../../../components/job-sidebar/job-sidebar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import JobData from '../../../data/job.json'

@Component({
  selector: 'app-job-list-six',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    JobSidebarComponent,
    ExploreJobComponent,
    ServicesComponent,
    FooterComponent
  ],
  templateUrl: './job-list-six.component.html',
  styleUrl: './job-list-six.component.scss'
})
export class JobListSixComponent {
 jobData = JobData
}
