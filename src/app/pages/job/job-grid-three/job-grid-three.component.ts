import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FormComponent } from '../../../components/form/form.component';

import JobData from '../../../data/job.json'
import { ServicesComponent } from '../../../components/services/services.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
@Component({
  selector: 'app-job-grid-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FormComponent,
    ServicesComponent,
    FooterComponent,
    ExploreJobComponent
  ],
  templateUrl: './job-grid-three.component.html',
  styleUrl: './job-grid-three.component.scss'
})
export class JobGridThreeComponent {
 jobData = JobData;
}
