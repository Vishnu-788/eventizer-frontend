import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verfiedGuard } from './verfied-guard';

describe('verfiedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verfiedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
