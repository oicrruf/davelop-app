import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import JobData from '../../data/job.json';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  jobData = JobData;
}
