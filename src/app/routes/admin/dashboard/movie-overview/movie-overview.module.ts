import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieOverviewComponent } from './movie-overview.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [MovieOverviewComponent],
  exports: [MovieOverviewComponent]
})
export class MovieOverviewModule { }
