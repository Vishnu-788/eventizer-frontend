import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationPendingComponent } from './verification-pending-component';

describe('VerificationPendingComponent', () => {
  let component: VerificationPendingComponent;
  let fixture: ComponentFixture<VerificationPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationPendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationPendingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
