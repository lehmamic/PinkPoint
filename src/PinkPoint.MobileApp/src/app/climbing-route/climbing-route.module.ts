import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClimbingRoutePage } from './climbing-route.page';
import { StoreModule } from '@ngrx/store';
import { CLIMBING_ROUTE_FEATURE_KEY } from './climbing-route.state';
import { ClimbingRouteEffects } from './climbing-route.effects';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { climbingRouteReducer } from './climbing-route.reducer';

const routes: Routes = [
  {
    path: '',
    component: ClimbingRoutePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(CLIMBING_ROUTE_FEATURE_KEY, climbingRouteReducer),
    EffectsModule.forFeature([ClimbingRouteEffects]),
    SharedModule,
  ],
  declarations: [ClimbingRoutePage]
})
export class ClimbingRoutePageModule {}
