import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTimingsComponent } from './list-timings/list-timings.component';

const routes: Routes = [
    {
        path: '',
        component: ListTimingsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }