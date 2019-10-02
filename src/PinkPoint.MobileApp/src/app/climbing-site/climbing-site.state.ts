import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';
import { createFeatureSelector } from '@ngrx/store';

export const initalClimbingSiteState: ClimbingSiteState = {
    data: {
        id: '',
        name: '',
        address: {
            street: '',
            postCode: '',
            city: '',
            state: '',
            country: '',
        }
    },
};

export interface ClimbingSiteState {
    data: ClimbingSiteResponse;
}

export const CLIMBING_SITE_FEATURE_KEY = 'climbing-site';

export const selectClimbingSiteState = createFeatureSelector<ClimbingSiteState>(CLIMBING_SITE_FEATURE_KEY);
