import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {tns} from 'tiny-slider'

@Component({
  selector: 'app-trending-services',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './trending-services.component.html',
  styleUrl: './trending-services.component.scss'
})
export class TrendingServicesComponent {
  slider:any;

  ngAfterViewInit(): void {
    this.slider = tns({
      container: '.tiny-five-item',
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 400,
      gutter: 0,
      responsive: {
          1025: {
              items: 5
          },

          992: {
              items: 4
          },

          767: {
              items: 3
          },

          425: {
              items: 1
          },
      },
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
