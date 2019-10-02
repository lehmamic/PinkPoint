import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

import { RequestInfo } from './app.state';

export enum AppActionTypes {
    ReportRequestState = '[App] Report Request State',
}

export enum RouterActionTypes {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward',
}

export class ReportRequestInfoAction implements Action {
  readonly type = AppActionTypes.ReportRequestState;

  constructor(public payload: RequestInfo) { }
}

export class GoAction implements Action {
  readonly type = RouterActionTypes.GO;

  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class BackAction implements Action {
  readonly type = RouterActionTypes.BACK;
}

export class ForwardAction implements Action {
  readonly type = RouterActionTypes.FORWARD;
}

export type AppActions = ReportRequestInfoAction;
export type RouterActions = GoAction | BackAction | ForwardAction;
