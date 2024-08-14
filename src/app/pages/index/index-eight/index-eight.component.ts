import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CounterComponent } from '../../../components/counter/counter.component';
import { PopularJobTwoComponent } from '../../../components/popular-job-two/popular-job-two.component';
import { BrowseCaregoryComponent } from '../../../components/browse-caregory/browse-caregory.component';
import { BestCompaniesTwoComponent } from '../../../components/best-companies-two/best-companies-two.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-index-eight',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CounterComponent,
    PopularJobTwoComponent,
    BrowseCaregoryComponent,
    BestCompaniesTwoComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './index-eight.component.html',
  styleUrl: './index-eight.component.scss'
})
export class IndexEightComponent {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
