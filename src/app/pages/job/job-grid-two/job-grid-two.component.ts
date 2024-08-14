import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { JobSidebarComponent } from '../../../components/job-sidebar/job-sidebar.component';
import JobData from '../../../data/job.json'
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ServicesComponent } from '../../../components/services/services.component';

@Component({
  selector: 'app-job-grid-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    JobSidebarComponent,
    ServicesComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './job-grid-two.component.html',
  styleUrl: './job-grid-two.component.scss'
})
export class JobGridTwoComponent {
 jobData = JobData;
}
