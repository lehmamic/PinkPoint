import { Action } from '@ngrx/store';
import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';

export enum ClimbingSiteActionTypes {
  LoadClimbingSite = '[ClimbingSite] Load',
  LoadClimbingSiteSucceeded = '[ClimbingSite] Load Succeeded',
}

export class LoadClimbingSiteAction implements Action {
  readonly type = ClimbingSiteActionTypes.LoadClimbingSite;

  constructor(public payload: { id: string; }) { }
}

export class LoadClimbingSiteSucceededAction implements Action {
  readonly type = ClimbingSiteActionTypes.LoadClimbingSiteSucceeded;

  constructor(public payload: { climbingSite: ClimbingSiteResponse }) { }
}

export type ClimbingSiteActions =
  LoadClimbingSiteAction |
  LoadClimbingSiteSucceededAction;
