import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class LoaderModule { }
