import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostEventDetailComponent } from './host-event-detail-component';

describe('HostEventDetailComponent', () => {
  let component: HostEventDetailComponent;
  let fixture: ComponentFixture<HostEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostEventDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostEventDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
