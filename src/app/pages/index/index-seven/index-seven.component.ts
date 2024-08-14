import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { WorkComponent } from '../../../components/work/work.component';
import { BrowseCaregoryComponent } from '../../../components/browse-caregory/browse-caregory.component';
import { MillionsOfJobComponent } from '../../../components/millions-of-job/millions-of-job.component';
import { QueAnsComponent } from '../../../components/que-ans/que-ans.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import JobData from '../../../data/job.json'

@Component({
  selector: 'app-index-seven',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    WorkComponent,
    BrowseCaregoryComponent,
    MillionsOfJobComponent,
    QueAnsComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './index-seven.component.html',
  styleUrl: './index-seven.component.scss'
})
export class IndexSevenComponent {
  jobData = JobData
}
