import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { CapsulesListComponent } from './capsules-list/capsules-list.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {NgSelectModule } from '@ng-select/ng-select';
import { ThreeDViewerComponent } from './three-dviewer/three-dviewer.component';
@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    CapsulesListComponent,
    AppHeaderComponent,
    ThreeDViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
