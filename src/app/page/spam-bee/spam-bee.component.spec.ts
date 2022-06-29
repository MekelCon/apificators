import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamBeeComponent } from './spam-bee.component';

describe('SpamBeeComponent', () => {
  let component: SpamBeeComponent;
  let fixture: ComponentFixture<SpamBeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpamBeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamBeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
