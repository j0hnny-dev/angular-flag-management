import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FeatureModule } from './feature/feature.module';
import { IdentitiesModule } from './identities/identities.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { PrimengModule } from './prime-ng.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PrimengModule,
    FeatureModule,
    IdentitiesModule,
    SchedulingModule
  ],
  exports: [
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
