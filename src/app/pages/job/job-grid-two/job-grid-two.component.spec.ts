import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridTwoComponent } from './job-grid-two.component';

describe('JobGridTwoComponent', () => {
  let component: JobGridTwoComponent;
  let fixture: ComponentFixture<JobGridTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
