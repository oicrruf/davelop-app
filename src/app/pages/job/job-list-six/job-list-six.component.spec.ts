import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListSixComponent } from './job-list-six.component';

describe('JobListSixComponent', () => {
  let component: JobListSixComponent;
  let fixture: ComponentFixture<JobListSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
