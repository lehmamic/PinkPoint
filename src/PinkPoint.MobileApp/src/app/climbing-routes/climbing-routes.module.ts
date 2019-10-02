import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClimbingRoutesPage } from './climbing-routes.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [ClimbingRoutesPage]
})
export class ClimbingRoutesPageModule {}
