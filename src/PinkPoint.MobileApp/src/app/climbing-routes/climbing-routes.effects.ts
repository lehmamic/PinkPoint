import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, withLatestFrom, startWith, flatMap } from 'rxjs/operators';
import {
  QueryClimbingRoutesAction,
  ClimbingRoutesActionTypes,
  QueryClimbingRoutesSucceededAction,
  QueryClimbingRoutesNextPageAction,
} from './climbing-routes.actions';
import { ClimbingRoutesService } from '../shared/api/climbing-routes.service';
import { Action, Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { Guid } from 'guid-typescript';
import { RootState } from '../app.state';
import { selectClimbingRoutesState } from './climbing-routes.state';
import { ReportRequestInfoAction } from '../app.actions';

@Injectable()
export class ClimbingRoutesEffects {
  queryClimbingRoutes$ = createEffect(() => this.actions$.pipe(
    ofType<QueryClimbingRoutesAction>(ClimbingRoutesActionTypes.QueryClimbingRoutes),
    withLatestFrom(of(Guid.create())),
    flatMap(([action, correlationId]) => this.climbingRoutesService.queryClimbingRoutes(
        action.payload.siteId,
        action.payload.queryParam,
        correlationId,
      )
      .pipe(
        flatMap(climbingRoutes => [
            new QueryClimbingRoutesSucceededAction({
              climbingRoutes,
              replace: action.payload.queryParam.skip <= 0,
              allDataLoaded: climbingRoutes.length < (action.payload.queryParam.take !== undefined ? action.payload.queryParam.take : 10) }
            ),
            new ReportRequestInfoAction({ type: 'QUERY_CLIMBING_ROUTES', correlationId, status: 'SUCCEEDED' })
          ] as Action[]),
          startWith(new ReportRequestInfoAction({ type: 'QUERY_CLIMBING_ROUTES', correlationId, status: 'PENDING' })),
        catchError(() => of<Action>(new ReportRequestInfoAction({ type: 'QUERY_CLIMBING_ROUTES', correlationId, status: 'FAILED' }))),
      )
    )
  ));

  queryClimbingRoutesNextPage$ = createEffect(() => this.actions$.pipe(
    ofType<QueryClimbingRoutesNextPageAction>(ClimbingRoutesActionTypes.QueryClimbingRoutesNextPage),
    withLatestFrom(this.store$.pipe(select(selectClimbingRoutesState))),
    map(([action, state]) => new QueryClimbingRoutesAction({
      siteId: action.payload.siteId,
      queryParam: { skip: state.data.length, take: 10 },
    })),
  ));

  constructor(private actions$: Actions, private store$: Store<RootState>, private climbingRoutesService: ClimbingRoutesService) {}
}
