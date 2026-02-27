import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verifiedHostGuard } from './verified-host-guard';

describe('verifiedHostGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verifiedHostGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
