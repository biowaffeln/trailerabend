import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { AddMovieModule } from './add-movie/add-movie.module';
import { MovieListModule } from './movie-list/movie-list.module';

@NgModule({
  imports: [
    CommonModule,
    AddMovieModule,
    MovieListModule,
  ],
  declarations: [MoviesComponent],
})
export class MoviesModule { }
