import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyHostComponent } from './verify-host-component';

describe('VerifyHostComponent', () => {
  let component: VerifyHostComponent;
  let fixture: ComponentFixture<VerifyHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyHostComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
