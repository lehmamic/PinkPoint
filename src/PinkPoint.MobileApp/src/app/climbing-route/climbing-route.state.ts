import { ClimbingRouteResponse } from '../shared/api/climbing-routes.service';
import { createFeatureSelector } from '@ngrx/store';

export const initalClimbingRouteState: ClimbingRouteState = {
    data: {
        id: '',
        name: '',
        description: '',
        grade: '',
        imageUri: '',
        color: '',
        type: 'SportClimbing',
    },
};

export interface ClimbingRouteState {
    data: ClimbingRouteResponse;
}

export const CLIMBING_ROUTE_FEATURE_KEY = 'climbing-route';

export const selectClimbingRouteState = createFeatureSelector<ClimbingRouteState>(CLIMBING_ROUTE_FEATURE_KEY);
