import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoodGuysComponent } from './good-guys/good-guys.component';
import { BadGuysComponent } from './bad-guys/bad-guys.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodGuysComponent,
    BadGuysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
