import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostEditForm } from './host-edit-form';

describe('HostEditForm', () => {
  let component: HostEditForm;
  let fixture: ComponentFixture<HostEditForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostEditForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostEditForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
