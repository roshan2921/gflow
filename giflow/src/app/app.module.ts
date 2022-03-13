import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Hellob1Component } from './hellob1/hellob1.component';
import { Hellob2Component } from './hellob2/hellob2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hellob1Component,
    Hellob2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
