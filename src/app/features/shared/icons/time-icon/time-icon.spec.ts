import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIcon } from './time-icon';

describe('TimeIcon', () => {
  let component: TimeIcon;
  let fixture: ComponentFixture<TimeIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
