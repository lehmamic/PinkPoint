import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, withLatestFrom, startWith, flatMap, concatAll } from 'rxjs/operators';
import {
  QueryClimbingSitesAction,
  ClimbingSitesActionTypes,
  QueryClimbingSitesSucceededAction,
  QueryClimbingSitesNextPageAction,
} from './climbing-sites.actions';
import { ClimbingRoutesService } from '../shared/api/climbing-routes.service';
import { Action, Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { Guid } from 'guid-typescript';
import { RootState } from '../app.state';
import { selectClimbingSitesState } from './climbing-sites.state';
import { ReportRequestInfoAction } from '../app.actions';

@Injectable()
export class ClimbingSitesEffects {
  queryClimbingSites$ = createEffect(() => this.actions$.pipe(
    ofType<QueryClimbingSitesAction>(ClimbingSitesActionTypes.QueryClimbingSites),
    withLatestFrom(of(Guid.create())),
    flatMap(([action, correlationId]) => this.climbingRoutesService.queryClimbingSites(action.payload)
      .pipe(
        flatMap(climbingSites => [
            new QueryClimbingSitesSucceededAction({
              climbingSites,
              replace: action.payload.skip > 0,
              allDataLoaded: climbingSites.length < (action.payload.take !== undefined ? action.payload.take : 10) }
            ),
            new ReportRequestInfoAction({ type: 'QUERY_CLIMBING_SITES', correlationId, status: 'SUCCEEDED' })
          ] as Action[]),
          startWith(new ReportRequestInfoAction({ type: 'QUERY_CLIMBING_SITES', correlationId, status: 'PENDING' })),
        catchError(() => of<Action>(new ReportRequestInfoAction({ type: 'QUERY_CLIMBING_SITES', correlationId, status: 'FAILED' }))),
      )
    )
  ));

  queryClimbingSitesNextPage$ = createEffect(() => this.actions$.pipe(
    ofType<QueryClimbingSitesNextPageAction>(ClimbingSitesActionTypes.QueryClimbingSitesNextPage),
    withLatestFrom(this.store$.pipe(select(selectClimbingSitesState))),
    map(([, state]) => new QueryClimbingSitesAction({ skip: state.data.length, take: 10 })),
  ));

  constructor(private actions$: Actions, private store$: Store<RootState>, private climbingRoutesService: ClimbingRoutesService) {}
}
