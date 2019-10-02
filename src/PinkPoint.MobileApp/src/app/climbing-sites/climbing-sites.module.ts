import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClimbingSitesPage } from './climbing-sites.page';
import { EffectsModule } from '@ngrx/effects';
import { ClimbingSitesEffects } from './climbing-sites.effects';
import { StoreModule } from '@ngrx/store';
import { climbingSitesReducer } from './climbing-sites.reducer';
import { CLIMBING_SITES_FEATURE_KEY } from './climbing-sites.state';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ClimbingSitesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(CLIMBING_SITES_FEATURE_KEY, climbingSitesReducer),
    EffectsModule.forFeature([ClimbingSitesEffects]),
    SharedModule
  ],
  declarations: [ClimbingSitesPage]
})
export class ClimbingSitesPageModule {}
