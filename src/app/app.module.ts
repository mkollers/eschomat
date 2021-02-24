import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { storageFactory } from './shared/helper/factories/storage.factory';
import { STORAGE } from './shared/helper/injection-tokens/storage.injection-token';
import { LayoutModule } from './shared/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,

    // Custom
    LayoutModule
  ],
  providers: [
    { provide: STORAGE, useFactory: storageFactory, deps: [PLATFORM_ID] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
