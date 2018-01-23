import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { Movie, ResultsMovie } from '../../../models/movie.model';
import { User } from '../../../models/user.model';
import { flatMap, map } from 'rxjs/operators';
import { LoaderType } from '../../../shared/loader/loader.model';

@Component({
  selector: 'app-live-results',
  templateUrl: './live-results.component.html',
  styleUrls: ['./live-results.component.scss']
})
export class LiveResultsComponent implements OnInit {

  movies: ResultsMovie[];
  spinner = LoaderType.SPINNER;

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.db.col$<User>('/users').pipe(
      flatMap(users => {
        const userResults = users.reduce((acc, user) => {
          if (!user.votes || Object.keys(user.votes).length === 0) {
            return {};
          }
          Object.keys(user.votes).forEach(movieId => {
            if (!acc[movieId]) {
              acc[movieId] = { for: 0, against: 0, neutral: 0 };
            }
            acc[movieId][user.votes[movieId]]++;
          });
          return acc;
        }, {});
        return this.db.col$<Movie>('/movies').pipe(
          map(movies => movies.map(movie => {
            const results = userResults[movie.id];
            return ({
              ...movie,
              results: results ? results : { for: 0, against: 0, neutral: 0 }
            })
          }) as ResultsMovie[])
        );
      })
    ).subscribe(movies => {
      this.movies = movies.sort((a, b) => {
        const forVotes = b.results.for - a.results.for;
        if (forVotes !== 0) { return forVotes; }
        else {
          return b.results.neutral - a.results.neutral;
        }
      });
    });
  }

}
