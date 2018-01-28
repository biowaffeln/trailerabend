import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Movie } from '../../models/movie.model';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();
  movies: Movie[];

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.db.col$<Movie>('/movies').pipe(
      takeUntil(this.onDestroy$),
    ).subscribe(
      movies => this.movies = movies
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
