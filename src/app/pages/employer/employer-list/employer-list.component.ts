import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { AccordianComponent } from '../../../components/accordian/accordian.component';
import JobData from '../../../data/job.json'
@Component({
  selector: 'app-employer-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ExploreJobComponent,
    FooterComponent,
    AccordianComponent
  ],
  templateUrl: './employer-list.component.html',
  styleUrl: './employer-list.component.scss'
})
export class EmployerListComponent {
  jobData = JobData

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
