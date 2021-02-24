import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyPageComponent } from './privacy-page.component';

const routes: Routes = [
  { path: '', component: PrivacyPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyPageRoutingModule { }
