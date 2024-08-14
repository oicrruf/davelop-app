import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { WorkComponent } from '../../../components/work/work.component';
import { GetJobComponent } from '../../../components/get-job/get-job.component';
import { BrowseCaregoryComponent } from '../../../components/browse-caregory/browse-caregory.component';
import { PopularJobTwoComponent } from '../../../components/popular-job-two/popular-job-two.component';
import { CtaComponent } from '../../../components/cta/cta.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { BestCompaniesTwoComponent } from '../../../components/best-companies-two/best-companies-two.component';

@Component({
  selector: 'app-index-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    WorkComponent,
    GetJobComponent,
    BrowseCaregoryComponent,
    PopularJobTwoComponent,
    CtaComponent,
    FooterComponent,
    BlogComponent,
    BestCompaniesTwoComponent
  ],
  templateUrl: './index-three.component.html',
  styleUrl: './index-three.component.scss'
})
export class IndexThreeComponent {
logoImg = [
  'assets/images/company/circle-logo.png',
  'assets/images/company/android.png',
  'assets/images/company/google-logo.png',
  'assets/images/company/facebook-logo.png',
  'assets/images/company/lenovo-logo.png',
  'assets/images/company/linkedin.png',
  'assets/images/company/skype.png',
  'assets/images/company/spotify.png',
  'assets/images/company/telegram.png',
  'assets/images/company/whatsapp.png'
]
}
