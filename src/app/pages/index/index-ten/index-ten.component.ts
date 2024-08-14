import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { tns } from 'tiny-slider';
import { GetJobComponent } from '../../../components/get-job/get-job.component';
import { PopularJobFourComponent } from '../../../components/popular-job-four/popular-job-four.component';
import { CtaComponent } from '../../../components/cta/cta.component';
import { CounterComponent } from '../../../components/counter/counter.component';
import { BestCompaniesTwoComponent } from '../../../components/best-companies-two/best-companies-two.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { FooterComponent } from '../../../components/footer/footer.component';
@Component({
  selector: 'app-index-ten',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    GetJobComponent,
    PopularJobFourComponent,
    CtaComponent,
    CounterComponent,
    BestCompaniesTwoComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './index-ten.component.html',
  styleUrl: './index-ten.component.scss'
})
export class IndexTenComponent {
  slider:any
  ngAfterViewInit(): void {
    this.slider = tns({
      container: '.tiny-one-item',
      items: 1,
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 5000,
      navPosition: "bottom",
      controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 2000,
      gutter: 0,
  });
  }

  servicesData = [
    {
      image:'assets/images/work/01.jpg',
      title:'Product & Branding Design'
    },
    {
      image:'assets/images/work/02.jpg',
      title:'Wordpress Development'
    },
    {
      image:'assets/images/work/03.jpg',
      title:'Audio & Video Editing'
    },
    {
      image:'assets/images/work/04.jpg',
      title:'Admin & Customer Support'
    },
    {
      image:'assets/images/work/05.jpg',
      title:'UX / UI Designer'
    },
    {
      image:'assets/images/work/06.jpg',
      title:'Digital Marketing'
    },
  ]
}
