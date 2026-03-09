import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantIcon } from './assistant-icon';

describe('AssistantIcon', () => {
  let component: AssistantIcon;
  let fixture: ComponentFixture<AssistantIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
