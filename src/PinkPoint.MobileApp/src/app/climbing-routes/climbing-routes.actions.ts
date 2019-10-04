import { Action } from '@ngrx/store';
import { ClimbingRouteResponse } from '../shared/api/climbing-routes.service';

export enum ClimbingRoutesActionTypes {
  QueryClimbingRoutes = '[ClimbingRoutes] Query',
  QueryClimbingRoutesNextPage = '[ClimbingRoutes] Query Next Page',
  QueryClimbingRoutesSucceeded = '[ClimbingRoutes] Query Succeeded',
}

export class QueryClimbingRoutesAction implements Action {
  readonly type = ClimbingRoutesActionTypes.QueryClimbingRoutes;

  constructor(public payload: { siteId: string; queryParam: { skip?: number; take?: number; }; }) { }
}

export class QueryClimbingRoutesNextPageAction implements Action {
  readonly type = ClimbingRoutesActionTypes.QueryClimbingRoutesNextPage;

  constructor(public payload: { siteId: string; }) { }
}

export class QueryClimbingRoutesSucceededAction implements Action {
  readonly type = ClimbingRoutesActionTypes.QueryClimbingRoutesSucceeded;
  constructor(public payload: { climbingRoutes: ClimbingRouteResponse[]; replace: boolean; allDataLoaded: boolean; }) { }
}

export type ClimbingRoutesActions =
  QueryClimbingRoutesAction |
  QueryClimbingRoutesNextPageAction |
  QueryClimbingRoutesSucceededAction;
