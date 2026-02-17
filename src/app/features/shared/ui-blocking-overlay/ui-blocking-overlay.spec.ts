import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBlockingOverlay } from './ui-blocking-overlay';

describe('UiBlockingOverlay', () => {
  let component: UiBlockingOverlay;
  let fixture: ComponentFixture<UiBlockingOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBlockingOverlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBlockingOverlay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
