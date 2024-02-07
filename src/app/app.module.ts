import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndxComponent } from './indx/indx.component';

import { ImgComponent } from './img/img.component';
import { MprComponent } from './mpr/mpr.component';

@NgModule({
  declarations: [
    AppComponent,
    IndxComponent,
    ImgComponent,
    MprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
