import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { PopularCategoriesComponent } from '../../../components/popular-categories/popular-categories.component';
import { MillionsOfJobComponent } from '../../../components/millions-of-job/millions-of-job.component';
import { PopularJobFiveComponent } from '../../../components/popular-job-five/popular-job-five.component';
import { CtaComponent } from '../../../components/cta/cta.component';
import { CounterComponent } from '../../../components/counter/counter.component';
import { BestCompaniesTwoComponent } from '../../../components/best-companies-two/best-companies-two.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-index-six',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PopularCategoriesComponent,
    MillionsOfJobComponent,
    PopularJobFiveComponent,
    CtaComponent,
    CounterComponent,
    BestCompaniesTwoComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './index-six.component.html',
  styleUrl: './index-six.component.scss'
})
export class IndexSixComponent {

}
