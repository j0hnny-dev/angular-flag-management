import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTimingsComponent } from './list-timings/list-timings.component';
import { ListItemTimingComponent } from './list-item/list-item-timing.component';
import { EditTimingComponent } from './edit-timing/edit-timing.component';
import { SchedulingRoutingModule } from './scheduling-routing.module';

@NgModule({
  declarations: [
    ListTimingsComponent,
    ListItemTimingComponent,
    EditTimingComponent
  ],
  imports: [
    CommonModule,
    SchedulingRoutingModule
  ]
})
export class SchedulingModule { }
