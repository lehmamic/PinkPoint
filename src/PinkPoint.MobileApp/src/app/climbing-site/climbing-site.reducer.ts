import { ClimbingSiteActions, ClimbingSiteActionTypes } from './climbing-site.actions';
import { ClimbingSiteState, initalClimbingSiteState } from './climbing-site.state';

export function climbingSiteReducer(state: ClimbingSiteState = initalClimbingSiteState, action: ClimbingSiteActions)
  : ClimbingSiteState {
  switch (action.type) {
    case ClimbingSiteActionTypes.LoadClimbingSiteSucceeded: {
      return {
        ...state,
        data: action.payload.climbingSite,
      };
    }

    default: {
      return state;
    }
  }
}
