import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreService } from '../../../../services/firestore.service';
import { Movie } from '../../../../models/movie.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit, OnDestroy {

  movies: Movie[];
  private onDestroy$ = new Subject<void>();
  moviePlural:
    { [k: string]: string } = { '=0': 'Keine Filme', '=1': '1 Film', 'other': '# Filme' };

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.db.col$<Movie>('/movies').pipe(
      takeUntil(this.onDestroy$)
    )
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
