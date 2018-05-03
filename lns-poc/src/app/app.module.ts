import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrandProfileComponent } from './brand-profile/brand-profile.component';
import { BusinessCardComponent } from './business-card/business-card.component';

import {
  MatInputModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule,
  MatCardModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule, MatTooltipModule,
  MatMenuModule, MatTabsModule, MatButtonToggleModule, MatAutocompleteModule, MatFormFieldModule, MatExpansionModule,
  MatListModule, MatProgressSpinnerModule, MatStepperModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BrandProfileComponent,
    BusinessCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
