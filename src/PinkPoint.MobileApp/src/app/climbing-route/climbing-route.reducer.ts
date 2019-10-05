import { ClimbingRouteActions, ClimbingRouteActionTypes } from './climbing-route.actions';
import { ClimbingRouteState, initalClimbingRouteState } from './climbing-route.state';

export function climbingRouteReducer(state: ClimbingRouteState = initalClimbingRouteState, action: ClimbingRouteActions)
  : ClimbingRouteState {
  switch (action.type) {
    case ClimbingRouteActionTypes.LoadClimbingRouteSucceeded: {
      return {
        ...state,
        data: action.payload.climbingRoute,
      };
    }

    default: {
      return state;
    }
  }
}
