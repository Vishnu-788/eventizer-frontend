import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHostEventsComponent } from './view-host-events-component';

describe('ViewHostEventsComponent', () => {
  let component: ViewHostEventsComponent;
  let fixture: ComponentFixture<ViewHostEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHostEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHostEventsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
