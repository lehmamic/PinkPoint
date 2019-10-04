import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClimbingRoutesPage } from './climbing-routes.page';
import { StoreModule } from '@ngrx/store';
import { CLIMBING_ROUTES_FEATURE_KEY } from './climbing-routes.state';
import { climbingRoutesReducer } from './climbing-routes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClimbingRoutesEffects } from './climbing-routes.effects';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ClimbingRoutesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(CLIMBING_ROUTES_FEATURE_KEY, climbingRoutesReducer),
    EffectsModule.forFeature([ClimbingRoutesEffects]),
    SharedModule,
  ],
  declarations: [ClimbingRoutesPage]
})
export class ClimbingRoutesPageModule {}
