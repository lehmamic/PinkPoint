import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TrackLoadingDirective } from './directives/track-loading.directive';

@NgModule({
  declarations: [
    TrackLoadingDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    TrackLoadingDirective,
  ],
})
export class SharedModule { }
