import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFeatureComponent } from './list-feature/list-feature.component';
import { EditFeatureComponent } from './edit-feature/edit-feature.component';

export const routes: Routes = [
  {
    path: 'features',
    component: ListFeatureComponent
  },
  {
    path: 'features/edit/:id',
    component: EditFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
