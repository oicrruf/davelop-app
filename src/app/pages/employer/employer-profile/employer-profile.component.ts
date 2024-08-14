import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import JobData from '../../../data/job.json'

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ExploreJobComponent,
    FooterComponent,
  ],
  templateUrl: './employer-profile.component.html',
  styleUrl: './employer-profile.component.scss'
})
export class EmployerProfileComponent {
  jobData = JobData;
  jobId:any;
  data:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id']
    this.data = this.jobData.find((x)=>x.id === parseInt(this.jobId));
  }
}
