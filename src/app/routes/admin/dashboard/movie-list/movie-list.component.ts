import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FirestoreService } from '../../../../services/firestore.service';
import { Movie } from '../../../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieDataSource: MatTableDataSource<Movie>;
  displayedCols = ['userName', 'id'];

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.movieDataSource = new MatTableDataSource();
    this.db.col$<Movie>('movies').subscribe(movies => {
      this.movieDataSource.data = movies;
    });
  }

}
