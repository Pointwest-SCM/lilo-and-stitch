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
import { HeaderComponent } from './shared/header/header.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { ResizableModule } from 'angular-resizable-element';

import { QuillModule } from 'ngx-quill';
import { TemplateComponent } from './shared/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandProfileComponent,
    BusinessCardComponent,
    HeaderComponent,
    CoverPhotoComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    AngularDraggableModule,
    ResizableModule,
    QuillModule
  ],
  entryComponents: [
    TemplateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
