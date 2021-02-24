import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalNoticePageComponent } from './legal-notice-page.component';

const routes: Routes = [
  { path: '', component: LegalNoticePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalNoticePageRoutingModule { }
