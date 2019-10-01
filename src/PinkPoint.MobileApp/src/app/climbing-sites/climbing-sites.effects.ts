import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { QueryClimbingSitesAction, ClimbingSitesActionTypes, QueryClimbingSitesSucceededAction } from './climbing-sites.actions';
import { ClimbingRoutesService } from '../shared/api/climbing-routes.service';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class ClimbingSitesEffects {
  queryClimbingSites$ = createEffect(() => this.actions$.pipe(
    ofType<QueryClimbingSitesAction>(ClimbingSitesActionTypes.QueryClimbingSites),
    tap(a => console.dir(a)),
    mergeMap(a => this.climbingRoutesService.queryClimbingSites(a.payload)
      .pipe(
        map(climbingSites => new QueryClimbingSitesSucceededAction( { climbingSites, replace: a.payload.skip > 0 }) as Action),
        catchError(() => of<Action>()),
      )
    )
  ));

  constructor(private actions$: Actions, private climbingRoutesService: ClimbingRoutesService) {}
}
