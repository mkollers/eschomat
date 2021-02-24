import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelperModule } from 'src/app/shared/helper/helper.module';

import { FaqPageRoutingModule } from './faq-page-routing.module';
import { FaqPageComponent } from './faq-page.component';

@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    FaqPageRoutingModule,

    // Custom
    HelperModule
  ]
})
export class FaqPageModule { }
