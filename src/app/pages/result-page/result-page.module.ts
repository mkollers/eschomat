import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ResultPageRoutingModule } from './result-page-routing.module';
import { ResultPageComponent } from './result-page.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [ResultPageComponent, SortByPipe],
  imports: [
    CommonModule,
    ResultPageRoutingModule,

    // Material
    MatProgressBarModule
  ]
})
export class ResultPageModule { }
