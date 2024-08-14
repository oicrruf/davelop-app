import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridOneComponent } from './job-grid-one.component';

describe('JobGridOneComponent', () => {
  let component: JobGridOneComponent;
  let fixture: ComponentFixture<JobGridOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
