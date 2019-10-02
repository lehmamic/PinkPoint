import { Action } from '@ngrx/store';
import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';

export enum ClimbingSitesActionTypes {
  QueryClimbingSites = '[ClimbingSites] Query',
  QueryClimbingSitesNextPage = '[ClimbingSites] Query Next Page',
  QueryClimbingSitesSucceeded = '[ClimbingSites] Query Succeeded',
}

export class QueryClimbingSitesAction implements Action {
  readonly type = ClimbingSitesActionTypes.QueryClimbingSites;

  constructor(public payload: { skip?: number; take?: number; }) { }
}

export class QueryClimbingSitesNextPageAction implements Action {
  readonly type = ClimbingSitesActionTypes.QueryClimbingSites;
}

export class QueryClimbingSitesSucceededAction implements Action {
  readonly type = ClimbingSitesActionTypes.QueryClimbingSitesSucceeded;
  constructor(public payload: { climbingSites: ClimbingSiteResponse[]; replace: boolean; allDataLoaded: boolean; }) { }
}

export type ClimbingSitesActions =
  QueryClimbingSitesAction |
  QueryClimbingSitesNextPageAction |
  QueryClimbingSitesSucceededAction;
