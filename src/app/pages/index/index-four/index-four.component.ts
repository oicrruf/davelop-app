import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MillionsOfJobComponent } from '../../../components/millions-of-job/millions-of-job.component';
import { BestCompaniesComponent } from '../../../components/best-companies/best-companies.component';
import { PopularJobThreeComponent } from '../../../components/popular-job-three/popular-job-three.component';
import { ServicesComponent } from '../../../components/services/services.component';
import { BlogComponent } from '../../../components/blog/blog.component';

@Component({
  selector: 'app-index-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    MillionsOfJobComponent,
    BestCompaniesComponent,
    PopularJobThreeComponent,
    ServicesComponent,
    BlogComponent
  ],
  templateUrl: './index-four.component.html',
  styleUrl: './index-four.component.scss'
})
export class IndexFourComponent {
  logoImg = [
    "assets/images/company/shree-logo.png",
    "assets/images/company/skype.png",
    "assets/images/company/snapchat.png",
    "assets/images/company/spotify.png",
    "assets/images/company/telegram.png",
    "assets/images/company/whatsapp.png",
    "assets/images/company/android.png" ,
    "assets/images/company/facebook-logo.png",
    "assets/images/company/linkedin.png",
    "assets/images/company/google-logo.png"
  ]
}
