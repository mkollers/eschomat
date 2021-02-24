import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe],
  exports: [SafePipe],
  imports: [
    CommonModule
  ]
})
export class HelperModule { }
