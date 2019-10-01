import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClimbingSitesPage } from './climbing-sites.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [ClimbingSitesPage]
})
export class ClimbingSitesPageModule {}
