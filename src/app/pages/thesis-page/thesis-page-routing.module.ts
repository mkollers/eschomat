import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThesisPageComponent } from './thesis-page.component';

const routes: Routes = [
  { path: '', component: ThesisPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThesisPageRoutingModule { }
