import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClimbingRoutesEffects } from './climbing-routes.effects';

describe('ClimbingSitesEffects', () => {
  let actions$: Observable<any>;
  let effects: ClimbingRoutesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClimbingRoutesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ClimbingRoutesEffects>(ClimbingRoutesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
