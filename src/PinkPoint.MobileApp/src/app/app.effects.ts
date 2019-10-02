import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoAction, RouterActionTypes, BackAction, ForwardAction } from './app.actions';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  navigate$ = createEffect(() => this.actions$.pipe(
    ofType<GoAction>(RouterActionTypes.GO),
    map(action => action.payload),
    tap(({ path, query: queryParams, extras }) =>
      this.router.navigate(path, { queryParams, ...extras })
    ),
  ), {
    dispatch: false,
  });

  navigateBack$ = createEffect(() => this.actions$.pipe(
    ofType<BackAction>(RouterActionTypes.BACK),
    tap(() => this.location.back()),
  ), {
    dispatch: false,
  });

  navigateForward$ = createEffect(() => this.actions$.pipe(
    ofType<ForwardAction>(RouterActionTypes.FORWARD),
    tap(() => this.location.forward()),
  ), {
    dispatch: false,
  });

  constructor(private actions$: Actions, private router: Router, private location: Location) {}
}
