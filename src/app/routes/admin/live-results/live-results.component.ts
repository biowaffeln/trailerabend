import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { Movie, ResultsMovie } from '../../../models/movie.model';
import { User } from '../../../models/user.model';
import { flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-live-results',
  templateUrl: './live-results.component.html',
  styleUrls: ['./live-results.component.scss']
})
export class LiveResultsComponent implements OnInit {

  movies: ResultsMovie[]

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.db.col$<User>('/users').pipe(
      flatMap(users => {
        const results = users.reduce((acc, user) => {
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
            return { ...movie, results: results[movie.id] }
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
