import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { PopularCategoriesComponent } from '../../../components/popular-categories/popular-categories.component';
import { MillionsOfJobComponent } from '../../../components/millions-of-job/millions-of-job.component';
import { BestCompaniesComponent } from '../../../components/best-companies/best-companies.component';
import { PopularJobOneComponent } from '../../../components/popular-job-one/popular-job-one.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import JobData from '../../../data/job.json'

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PopularCategoriesComponent,
    MillionsOfJobComponent,
    BestCompaniesComponent,
    PopularJobOneComponent,
    ServicesComponent,
    BlogComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {
jobData = JobData
ngOnInit(): void {
}
}
