import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MatCardModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: [MovieListComponent],
  exports: [MovieListComponent]
})
export class MovieListModule { }
