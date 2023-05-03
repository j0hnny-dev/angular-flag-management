import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFeatureComponent } from './new-feature/new-feature.component';
import { FormsModule } from '@angular/forms';
import { FeaturesListComponent } from './features-list/features-list.component';
import { FeatureListitemComponent } from './feature-listitem/feature-listitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFeatureComponent,
    FeaturesListComponent,
    FeatureListitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
