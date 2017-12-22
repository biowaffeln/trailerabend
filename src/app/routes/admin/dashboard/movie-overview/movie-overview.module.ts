import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieOverviewComponent } from './movie-overview.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { LoaderModule } from '../../../../shared/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LoaderModule
  ],
  declarations: [MovieOverviewComponent],
  exports: [MovieOverviewComponent]
})
export class MovieOverviewModule { }
