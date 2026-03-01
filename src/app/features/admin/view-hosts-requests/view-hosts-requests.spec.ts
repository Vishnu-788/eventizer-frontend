import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHostsRequests } from './view-hosts-requests';

describe('ViewHostsRequests', () => {
  let component: ViewHostsRequests;
  let fixture: ComponentFixture<ViewHostsRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHostsRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHostsRequests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
