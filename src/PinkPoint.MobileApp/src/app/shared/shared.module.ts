import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteDirective } from './directives/auto-complete.directive';

@NgModule({
  declarations: [
    AutoCompleteDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    AutoCompleteDirective,
  ],
})
export class SharedModule { }
