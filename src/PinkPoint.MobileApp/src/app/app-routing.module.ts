import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'climbing-sites/:id',
    loadChildren: () => import('./climbing-site/climbing-site.module').then(m => m.ClimbingSitePageModule),
  },
  {
    path: 'climbing-sites/:siteId/climbing-routes',
    loadChildren: () => import('./climbing-routes/climbing-routes.module').then(m => m.ClimbingRoutesPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
