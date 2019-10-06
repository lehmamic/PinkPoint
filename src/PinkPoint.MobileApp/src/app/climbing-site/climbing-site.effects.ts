import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, withLatestFrom, startWith, flatMap } from 'rxjs/operators';
import {
  ClimbingSiteActionTypes,
  LoadClimbingSiteAction,
  LoadClimbingSiteSucceededAction,
} from './climbing-site.actions';
import { ClimbingRoutesService } from '../shared/api/climbing-routes.service';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { Guid } from 'guid-typescript';
import { ReportRequestInfoAction } from '../app.actions';

@Injectable()
export class ClimbingSiteEffects {
  loadClimbingSite$ = createEffect(() => this.actions$.pipe(
    ofType<LoadClimbingSiteAction>(ClimbingSiteActionTypes.LoadClimbingSite),
    withLatestFrom(of(Guid.create())),
    flatMap(([action, correlationId]) => this.climbingRoutesService.loadClimbingSite(action.payload.id, correlationId)
      .pipe(
        flatMap(climbingSite => [
            new LoadClimbingSiteSucceededAction({ climbingSite }),
            new ReportRequestInfoAction({ type: 'LOAD_CLIMBING_SITE', correlationId, status: 'SUCCEEDED' })
          ] as Action[]),
          startWith(new ReportRequestInfoAction({ type: 'LOAD_CLIMBING_SITE', correlationId, status: 'PENDING' })),
        catchError(() => of<Action>(new ReportRequestInfoAction({ type: 'LOAD_CLIMBING_SITE', correlationId, status: 'FAILED' }))),
      )
    )
  ));

  constructor(private actions$: Actions, private climbingRoutesService: ClimbingRoutesService) {}
}
