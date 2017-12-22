import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../../services/firestore.service';
import { Movie } from '../../../../models/movie.model';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  movies: Movie[];

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.db.col$<Movie>('/movies').subscribe(movies => {
      this.movies = movies;
    });
  }

}
