import { ClimbingRouteResponse } from '../shared/api/climbing-routes.service';
import { createFeatureSelector } from '@ngrx/store';

export const initalClimbingRoutesState: ClimbingRoutesState = {
    data: [],
    allDataLoaded: false,
};

export interface ClimbingRoutesState {
    data: ClimbingRouteResponse[];
    allDataLoaded: boolean;
}

export const CLIMBING_ROUTES_FEATURE_KEY = 'climbing-routes';

export const selectClimbingRoutesState = createFeatureSelector<ClimbingRoutesState>(CLIMBING_ROUTES_FEATURE_KEY);
