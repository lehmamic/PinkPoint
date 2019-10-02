import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { RootState, AppState, initialAppState, RequestInfo, PendingRequestsState, RequestStatus } from './app.state';
import { routerReducer } from '@ngrx/router-store';
import { AppActions, AppActionTypes } from './app.actions';

function updateIntoHistory(request: RequestInfo, history: RequestInfo[]): RequestInfo[] {
  const newHistory = [...history];

  const index = newHistory.findIndex(r => r.correlationId === request.correlationId);
  if (index >= 0) {
    newHistory[index] = request;
  } else {
    newHistory.push(request);
  }

  return newHistory;
}

function getRequestPendingStates(history: RequestInfo[]): PendingRequestsState {
  const requestsByType: { [index: string]: RequestInfo[]; } = history.reduce((grouped, request) => {
    (grouped[request.type] = grouped[request.type] || []).push(request);
    return grouped;
  }, {} as { [index: string]: RequestInfo[]; });

  const status = Object.keys(requestsByType).reduce((state, key) => {
    state[key] = requestsByType[key].findIndex(r => r.status === 'PENDING') >= 0;
    return state;
  }, {} as { [index: string]: boolean; });

  const result: PendingRequestsState = {
    isRequestPending: history.findIndex(r => r.status === 'PENDING') >= 0,
    ... status,
  };

  return result;
}

export function appReducer(state: AppState = initialAppState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.ReportRequestState: {
      const newHistory = updateIntoHistory(action.payload, state.requests.history);
      return {
        ...state,
        requests: {
          history: newHistory,
          pending: getRequestPendingStates(newHistory),
        }
      };
    }

    default: {
      return state;
    }
  }
}

export const rootReducers: ActionReducerMap<RootState> = {
  app: appReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
