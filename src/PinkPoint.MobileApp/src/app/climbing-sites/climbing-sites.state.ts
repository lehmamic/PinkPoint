import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';
import { createFeatureSelector } from '@ngrx/store';

export const initalClimbingSitesState: ClimbingSitesState = {
    data: [],
    allDataLoaded: false,
};

export interface ClimbingSitesState {
    data: ClimbingSiteResponse[];
    allDataLoaded: boolean;
}

export const CLIMBING_SITES_FEATURE_KEY = 'climbing-sites';

export const selectClimbingSitesState = createFeatureSelector<ClimbingSitesState>(CLIMBING_SITES_FEATURE_KEY);
