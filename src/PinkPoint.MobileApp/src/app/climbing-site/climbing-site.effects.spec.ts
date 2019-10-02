import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClimbingSiteEffects } from './climbing-site.effects';

describe('ClimbingSiteEffects', () => {
  let actions$: Observable<any>;
  let effects: ClimbingSiteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClimbingSiteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ClimbingSiteEffects>(ClimbingSiteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
