import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IdentitiesModule { }
