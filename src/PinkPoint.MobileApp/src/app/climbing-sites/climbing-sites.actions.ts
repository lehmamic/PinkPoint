import { Action } from '@ngrx/store';
import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';

export enum ClimbingSitesActionTypes {
  QueryClimbingSites = '[ClimbingSites] Query',
  QueryClimbingSitesSucceeded = '[ClimbingSites] Query Succeeded',
}

export class QueryClimbingSitesAction implements Action {
  readonly type = ClimbingSitesActionTypes.QueryClimbingSites;

  constructor(public payload: { skip?: number; take?: number; }) { }
}

export class QueryClimbingSitesSucceededAction implements Action {
  readonly type = ClimbingSitesActionTypes.QueryClimbingSitesSucceeded;
  constructor(public payload: { climbingSites: ClimbingSiteResponse[]; replace: boolean; }) { }
}

export type ClimbingSitesActions =
  QueryClimbingSitesAction |
  QueryClimbingSitesSucceededAction;
