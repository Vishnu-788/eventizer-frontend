import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsIcon } from './tickets-icon';

describe('TicketsIcon', () => {
  let component: TicketsIcon;
  let fixture: ComponentFixture<TicketsIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
