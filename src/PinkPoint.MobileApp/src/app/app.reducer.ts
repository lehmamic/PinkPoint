import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { RootState } from './app.state';



export const rootReducers: ActionReducerMap<RootState> = {

};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
