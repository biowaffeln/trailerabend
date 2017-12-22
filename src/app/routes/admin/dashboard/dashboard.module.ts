import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material';
import { UserListModule } from './user-list/user-list.module';
import { AddMovieModule } from './add-movie/add-movie.module';
import { MovieListModule } from './movie-list/movie-list.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    UserListModule,
    MovieListModule,
    AddMovieModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
