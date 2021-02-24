import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqPageComponent } from './faq-page.component';

const routes: Routes = [
  { path: '', component: FaqPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqPageRoutingModule { }
