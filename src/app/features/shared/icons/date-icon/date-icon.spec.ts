import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateIcon } from './date-icon';

describe('DateIcon', () => {
  let component: DateIcon;
  let fixture: ComponentFixture<DateIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
