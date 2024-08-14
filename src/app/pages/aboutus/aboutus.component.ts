import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MillionsOfJobComponent } from '../../components/millions-of-job/millions-of-job.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { QueAnsComponent } from '../../components/que-ans/que-ans.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExploreJobComponent } from '../../components/explore-job/explore-job.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MillionsOfJobComponent,
    CounterComponent,
    QueAnsComponent,
    FooterComponent,
    ExploreJobComponent
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
  featureData = [
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
}
