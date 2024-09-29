import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss',
})
export class AccordianComponent implements OnInit {
  @Input() recommendations: any;
  @Input() firstTab: number = 0;

  public data: any = [];

  ngOnInit(): void {
    this.data = this.recommendations;
    this.toggleBtn(this.firstTab);
  }

  activeTab: number = this.firstTab;

  toggleBtn(index: number) {
    this.activeTab = index;
  }
}
