import { ClimbingRoutesActions, ClimbingRoutesActionTypes } from './climbing-routes.actions';
import { ClimbingRoutesState, initalClimbingRoutesState } from './climbing-routes.state';

export function climbingRoutesReducer(state: ClimbingRoutesState = initalClimbingRoutesState, action: ClimbingRoutesActions)
  : ClimbingRoutesState {
  switch (action.type) {
    case ClimbingRoutesActionTypes.QueryClimbingRoutesSucceeded: {
      return {
        ...state,
        data: action.payload.replace ? action.payload.climbingRoutes : [...state.data, ...action.payload.climbingRoutes],
        allDataLoaded: action.payload.allDataLoaded,
      };
    }

    default: {
      return state;
    }
  }
}
