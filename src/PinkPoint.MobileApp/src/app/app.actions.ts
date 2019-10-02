import { Action } from '@ngrx/store';

import { RequestInfo } from './app.state';

export enum AppActionTypes {
    ReportRequestState = '[App] Report Request State',
}

export class ReportRequestInfoAction implements Action {
  readonly type = AppActionTypes.ReportRequestState;

  constructor(public payload: RequestInfo) { }
}

export type AppActions =
  ReportRequestInfoAction;
