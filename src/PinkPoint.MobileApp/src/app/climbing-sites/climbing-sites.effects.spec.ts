import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClimbingSitesEffects } from './climbing-sites.effects';

describe('ClimbingSitesEffects', () => {
  let actions$: Observable<any>;
  let effects: ClimbingSitesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClimbingSitesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ClimbingSitesEffects>(ClimbingSitesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
