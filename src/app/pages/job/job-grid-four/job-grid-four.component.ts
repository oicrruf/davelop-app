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
  selector: 'app-job-grid-four',
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
  templateUrl: './job-grid-four.component.html',
  styleUrl: './job-grid-four.component.scss'
})
export class JobGridFourComponent {
  jobData = JobData;
}
