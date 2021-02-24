import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { CONFIG } from 'src/config';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: CONFIG, useValue: require('../assets/root/config.json') }
  ]
})
export class AppServerModule { }
