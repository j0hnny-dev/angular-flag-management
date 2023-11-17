import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFeatureComponent } from './edit-feature/edit-feature.component';
import { ListFeatureComponent } from './list-feature/list-feature.component';
import { ListItemFeatureComponent } from './list-item-feature/list-item-feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { PrimengModule } from '../prime-ng.module';

@NgModule({
  declarations: [
    EditFeatureComponent,
    ListFeatureComponent,
    ListItemFeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    PrimengModule
  ]
})
export class FeatureModule { }
