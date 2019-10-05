import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClimbingRouteEffects } from './climbing-route.effects';

describe('ClimbingSiteEffects', () => {
  let actions$: Observable<any>;
  let effects: ClimbingRouteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClimbingRouteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ClimbingRouteEffects>(ClimbingRouteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
