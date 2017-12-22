import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieListModule } from '../dashboard/movie-list/movie-list.module';
import { AddMovieModule } from '../dashboard/add-movie/add-movie.module';

@NgModule({
  imports: [
    CommonModule,
    AddMovieModule,
    MovieListModule,
  ],
  declarations: [MoviesComponent],
})
export class MoviesModule { }
