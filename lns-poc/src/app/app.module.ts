import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrandProfileComponent } from './brand-profile/brand-profile.component';
import { BusinessCardComponent } from './business-card/business-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandProfileComponent,
    BusinessCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
