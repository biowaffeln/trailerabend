import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MatCardModule, MatTableModule } from '@angular/material';
import { LoaderModule } from '../../../../shared/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    LoaderModule
  ],
  declarations: [MovieListComponent],
  exports: [MovieListComponent]
})
export class MovieListModule { }
