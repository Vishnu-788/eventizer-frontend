import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingIcon } from './booking-icon';

describe('BookingIcon', () => {
  let component: BookingIcon;
  let fixture: ComponentFixture<BookingIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
