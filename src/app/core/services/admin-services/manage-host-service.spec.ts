import { TestBed } from '@angular/core/testing';

import { ManageHostService } from './manage-host-service';

describe('ManageHostService', () => {
  let service: ManageHostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageHostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
