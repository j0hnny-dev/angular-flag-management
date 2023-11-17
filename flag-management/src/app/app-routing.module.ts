import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'features',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: 'identities',
    loadChildren: () => import('./identities/identities.module').then(m => m.IdentitiesModule)
  },
  {
    path: 'scheduling',
    loadChildren: () => import('./scheduling/scheduling.module').then(m => m.SchedulingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
