import { TestBed } from '@angular/core/testing';

import { ClimbingRoutesService } from './climbing-routes.service';

describe('ClimbingRoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClimbingRoutesService = TestBed.get(ClimbingRoutesService);
    expect(service).toBeTruthy();
  });
});
