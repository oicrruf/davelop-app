import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridThreeComponent } from './job-grid-three.component';

describe('JobGridThreeComponent', () => {
  let component: JobGridThreeComponent;
  let fixture: ComponentFixture<JobGridThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
