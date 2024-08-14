import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridFourComponent } from './job-grid-four.component';

describe('JobGridFourComponent', () => {
  let component: JobGridFourComponent;
  let fixture: ComponentFixture<JobGridFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
