import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AccordianComponent } from '../../components/accordian/accordian.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExploreJobComponent } from '../../components/explore-job/explore-job.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AccordianComponent,
    FooterComponent,
    ExploreJobComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesData = [
    {
      icon:'uil uil-phone',
      title:'24/7 Support',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-atom',
      title:'Tech & Startup Jobs',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-user-arrows',
      title:'Quick & Easy',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-hourglass',
      title:'Save Time',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-user-arrows',
      title:'Apply with confidence',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-user-arrows',
      title:'Reduce Hiring Bias',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-briefcase',
      title:'Proactive Employers',
      desc:'Many desktop publishing now use and a search for job.'
    },
    {
      icon:'uil uil-user-arrows',
      title:'No Missed Opportunities',
      desc:'Many desktop publishing now use and a search for job.'
    },
  ]

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
