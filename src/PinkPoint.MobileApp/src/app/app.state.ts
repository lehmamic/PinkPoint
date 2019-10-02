import { RouterReducerState } from '@ngrx/router-store';
import { Guid } from 'guid-typescript';

export type RequestStatus = 'PENDING' | 'SUCCEEDED' | 'FAILED';
export type RequestType = 'QUERY_CLIMBING_SITES';

export interface RequestInfo {
  correlationId: Guid;
  status: RequestStatus;
  type: RequestType;
}

export interface RequestsState {
    history: RequestInfo[];
    pending: PendingRequestsState;
}

export interface PendingRequestsState {
    isRequestPending: boolean;
    [index: string]: boolean;
}

export const initialAppState: AppState = {
    requests: {
        history: [],
        pending: {
            isRequestPending: false,
        },
    }
};

export interface AppState {
    requests: RequestsState;
}

export interface RootState {
  app: AppState;
  router: RouterReducerState;
}
