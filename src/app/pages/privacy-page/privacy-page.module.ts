import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPageRoutingModule } from './privacy-page-routing.module';
import { PrivacyPageComponent } from './privacy-page.component';


@NgModule({
  declarations: [PrivacyPageComponent],
  imports: [
    CommonModule,
    PrivacyPageRoutingModule
  ]
})
export class PrivacyPageModule { }
