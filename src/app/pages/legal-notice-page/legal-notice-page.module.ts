import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalNoticePageRoutingModule } from './legal-notice-page-routing.module';
import { LegalNoticePageComponent } from './legal-notice-page.component';


@NgModule({
  declarations: [LegalNoticePageComponent],
  imports: [
    CommonModule,
    LegalNoticePageRoutingModule
  ]
})
export class LegalNoticePageModule { }
