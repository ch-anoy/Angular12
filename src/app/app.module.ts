import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import {ThirdModule} from './third/third.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThirdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
