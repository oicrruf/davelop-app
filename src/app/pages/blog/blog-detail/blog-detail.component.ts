import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ExploreJobComponent } from '../../../components/explore-job/explore-job.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import BlogData from '../../../data/blog.json'

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ExploreJobComponent,
    FooterComponent
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
blogData = BlogData

social = [
  "facebook","instagram","twitter","linkedin","github","youtube","gitlab"
]

constructor(private route:ActivatedRoute){}

id:any;
data:any;
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.data = this.blogData.find((item:any)=>item.id === parseInt(this.id));
}
}
