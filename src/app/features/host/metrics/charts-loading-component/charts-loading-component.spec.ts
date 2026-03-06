import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsLoadingComponent } from './charts-loading-component';

describe('ChartsLoadingComponent', () => {
  let component: ChartsLoadingComponent;
  let fixture: ComponentFixture<ChartsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsLoadingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
