import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fetchingResolver } from './fetching.resolver';

describe('fetchingResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fetchingResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
