import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FormComponent } from '../../../components/form/form.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import JobData from '../../../data/job.json'

@Component({
  selector: 'app-job-list-three',
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
  templateUrl: './job-list-three.component.html',
  styleUrl: './job-list-three.component.scss'
})
export class JobListThreeComponent {
  jobData = JobData;
}
