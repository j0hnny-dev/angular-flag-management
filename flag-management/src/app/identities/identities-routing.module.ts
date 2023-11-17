import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListIdentitiesComponent } from './list-identities/list-identities.component';

const routes: Routes = [
  {
    path: '',
    component: ListIdentitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IdentitiesRoutingModule { }