import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { RootState } from './app.state';
import { routerReducer } from '@ngrx/router-store';



export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
