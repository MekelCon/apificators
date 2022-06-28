import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFishingComponent } from './report-fishing.component';

describe('ReportFishingComponent', () => {
  let component: ReportFishingComponent;
  let fixture: ComponentFixture<ReportFishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
