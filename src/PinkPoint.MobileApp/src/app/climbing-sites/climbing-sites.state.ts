import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';
import { createFeatureSelector } from '@ngrx/store';

export const initalClimbingSitesState: ClimbingSitesState = {
    data: [],
};

export interface ClimbingSitesState {
    data: ClimbingSiteResponse[];
};

export const CLIMBING_SITES_FEATURE_KEY = 'climbing-sites';

export const selectClimbingSitesState = createFeatureSelector<ClimbingSitesState>(CLIMBING_SITES_FEATURE_KEY);
