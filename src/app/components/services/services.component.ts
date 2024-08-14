import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterLink],
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
  ]
}
