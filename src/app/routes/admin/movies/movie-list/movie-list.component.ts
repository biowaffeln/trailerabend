import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FirestoreService } from '../../../../services/firestore.service';
import { Movie } from '../../../../models/movie.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movieDataSource: MatTableDataSource<Movie>;
  displayedCols = ['userName', 'id'];
  loaded = false;

  private onDestroy$ = new Subject<void>();

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.movieDataSource = new MatTableDataSource();
    this.db.col$<Movie>('/movies').pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe(movies => {
      this.movieDataSource.data = movies;
      this.loaded = true;
    });
    
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
