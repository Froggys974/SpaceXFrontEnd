import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { CapsulesListComponent } from './capsules-list/capsules-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    CapsulesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
