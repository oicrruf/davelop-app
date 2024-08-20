import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import Candidate from '../../data/candidate.json';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
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
      title: 'Pensamiento Estratégico',
      percentage: '46.89%',
    },
    {
      title: 'Desarrollo de las Personas',
      percentage: '62.29%',
    },
    {
      title: 'Liderazgo',
      percentage: '48%',
    },
    {
      title: 'Innovación',
      percentage: '69.5%',
    },
    {
      title: 'Toma de Decisiones',
      percentage: '80.29%',
    },
    {
      title: 'Análisis de Problemas',
      percentage: '72.5%',
    },
  ];
}
