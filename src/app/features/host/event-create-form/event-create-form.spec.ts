import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateForm } from './event-create-form';

describe('EventCreateForm', () => {
  let component: EventCreateForm;
  let fixture: ComponentFixture<EventCreateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCreateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCreateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
