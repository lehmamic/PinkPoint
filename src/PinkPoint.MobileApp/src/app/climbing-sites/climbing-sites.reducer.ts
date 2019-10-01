import { ClimbingSitesActions, ClimbingSitesActionTypes } from './climbing-sites.actions';
import { ClimbingSitesState, initalClimbingSitesState } from './climbing-sites.state';

export function climbingSitesReducer(state: ClimbingSitesState = initalClimbingSitesState, action: ClimbingSitesActions)
  : ClimbingSitesState {
  switch (action.type) {
    case ClimbingSitesActionTypes.QueryClimbingSitesSucceeded: {
      return {
        ...state,
        data: action.payload.replace ? action.payload.climbingSites : [...state.data, ...action.payload.climbingSites],
      };
    }

    default: {
      return state;
    }
  }
}