import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { MillionsOfJobComponent } from '../../../components/millions-of-job/millions-of-job.component';
import { PopularJobFiveComponent } from '../../../components/popular-job-five/popular-job-five.component';
import { CounterComponent } from '../../../components/counter/counter.component';
import { CtaComponent } from '../../../components/cta/cta.component';
import { BestCompaniesTwoComponent } from '../../../components/best-companies-two/best-companies-two.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-index-nine',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MillionsOfJobComponent,
    PopularJobFiveComponent,
    CounterComponent,
    CtaComponent,
    BestCompaniesTwoComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './index-nine.component.html',
  styleUrl: './index-nine.component.scss'
})
export class IndexNineComponent {

}
