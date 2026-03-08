import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsIcon } from './analytics-icon';

describe('AnalyticsIcon', () => {
  let component: AnalyticsIcon;
  let fixture: ComponentFixture<AnalyticsIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
