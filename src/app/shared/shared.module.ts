import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CoreModule
  ]
})
export class SharedModule { }
