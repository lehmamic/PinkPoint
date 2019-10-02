import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClimbingSitePage } from './climbing-site.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { CLIMBING_SITE_FEATURE_KEY } from './climbing-site.state';
import { ClimbingSiteEffects } from './climbing-site.effects';
import { climbingSiteReducer } from './climbing-site.reducer';

const routes: Routes = [
  {
    path: '',
    component: ClimbingSitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(CLIMBING_SITE_FEATURE_KEY, climbingSiteReducer),
    EffectsModule.forFeature([ClimbingSiteEffects]),
    SharedModule,
  ],
  declarations: [ClimbingSitePage]
})
export class ClimbingSitePageModule {}
