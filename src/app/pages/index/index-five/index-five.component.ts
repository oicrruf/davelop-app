import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CounterComponent } from '../../../components/counter/counter.component';
import { PopularCategoriesComponent } from '../../../components/popular-categories/popular-categories.component';
import { MillionsOfJobComponent } from '../../../components/millions-of-job/millions-of-job.component';
import { PopularJobFourComponent } from '../../../components/popular-job-four/popular-job-four.component';
import { BestCompaniesComponent } from '../../../components/best-companies/best-companies.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-index-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CounterComponent,
    PopularCategoriesComponent,
    MillionsOfJobComponent,
    PopularJobFourComponent,
    BestCompaniesComponent,
    ServicesComponent,
    BlogComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './index-five.component.html',
  styleUrl: './index-five.component.scss'
})
export class IndexFiveComponent {

}
