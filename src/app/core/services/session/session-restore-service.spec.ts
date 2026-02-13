import { TestBed } from '@angular/core/testing';

import { SessionRestoreService } from './session-restore-service';

describe('SessionRestoreService', () => {
  let service: SessionRestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionRestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
