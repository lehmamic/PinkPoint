import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, withLatestFrom, startWith, flatMap } from 'rxjs/operators';
import {
  ClimbingRouteActionTypes,
  LoadClimbingRouteAction,
  LoadClimbingRouteSucceededAction,
} from './climbing-route.actions';
import { ClimbingRoutesService } from '../shared/api/climbing-routes.service';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { Guid } from 'guid-typescript';
import { ReportRequestInfoAction } from '../app.actions';

@Injectable()
export class ClimbingRouteEffects {
  loadClimbingRoute$ = createEffect(() => this.actions$.pipe(
    ofType<LoadClimbingRouteAction>(ClimbingRouteActionTypes.LoadClimbingRoute),
    withLatestFrom(of(Guid.create())),
    flatMap(([action, correlationId]) => this.climbingRoutesService.loadClimbingRoute(action.payload.siteId, action.payload.id)
      .pipe(
        flatMap(climbingRoute => [
            new LoadClimbingRouteSucceededAction({ climbingRoute }),
            new ReportRequestInfoAction({ type: 'LOAD_CLIMBING_ROUTE', correlationId, status: 'SUCCEEDED' })
          ] as Action[]),
          startWith(new ReportRequestInfoAction({ type: 'LOAD_CLIMBING_ROUTE', correlationId, status: 'PENDING' })),
        catchError(() => of<Action>(new ReportRequestInfoAction({ type: 'LOAD_CLIMBING_ROUTE', correlationId, status: 'FAILED' }))),
      )
    )
  ));

  constructor(private actions$: Actions, private climbingRoutesService: ClimbingRoutesService) {}
}
