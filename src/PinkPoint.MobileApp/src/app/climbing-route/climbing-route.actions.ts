import { Action } from '@ngrx/store';
import { ClimbingRouteResponse } from '../shared/api/climbing-routes.service';

export enum ClimbingRouteActionTypes {
  LoadClimbingRoute = '[ClimbingRoute] Load',
  LoadClimbingRouteSucceeded = '[ClimbingRoute] Load Succeeded',
}

export class LoadClimbingRouteAction implements Action {
  readonly type = ClimbingRouteActionTypes.LoadClimbingRoute;

  constructor(public payload: { siteId: string; id: string; }) { }
}

export class LoadClimbingRouteSucceededAction implements Action {
  readonly type = ClimbingRouteActionTypes.LoadClimbingRouteSucceeded;

  constructor(public payload: { climbingRoute: ClimbingRouteResponse }) { }
}

export type ClimbingRouteActions =
  LoadClimbingRouteAction |
  LoadClimbingRouteSucceededAction;
