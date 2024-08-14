import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import Candidate from '../../../data/candidate.json';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.scss',
})
export class CandidateProfileComponent {
  candidate = Candidate;
  id: any;
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.data = this.candidate.find((x: any) => x.id === parseInt(this.id));
  }
  skillData = [
    {
      title: 'WordPress',
      percentage: '80%',
    },
    {
      title: 'JavaScript',
      percentage: '79%',
    },
    {
      title: 'HTML',
      percentage: '95%',
    },
    {
      title: 'Figma',
      percentage: '85%',
    },
    {
      title: 'Photoshop',
      percentage: '70%',
    },
    {
      title: 'Illustration',
      percentage: '65%',
    },
  ];
}
