import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { accessGuard } from './access.guard';

describe('accessGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
