import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemIdentityComponent } from './list-item/list-item.component';
import { EditIdentityComponent } from './edit-identity/edit-identity.component';
import { ListIdentitiesComponent } from './list-identities/list-identities.component';
import { IdentitiesRoutingModule } from './identities-routing.module';
import { PrimengModule } from '../prime-ng.module';

@NgModule({
  declarations: [
    ListIdentitiesComponent,
    ListItemIdentityComponent,
    EditIdentityComponent
  ],
  imports: [
    CommonModule,
    IdentitiesRoutingModule,
    PrimengModule
  ]
})
export class IdentitiesModule { }
