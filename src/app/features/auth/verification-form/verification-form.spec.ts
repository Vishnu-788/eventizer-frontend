import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationForm } from './verification-form';

describe('VerificationForm', () => {
  let component: VerificationForm;
  let fixture: ComponentFixture<VerificationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
