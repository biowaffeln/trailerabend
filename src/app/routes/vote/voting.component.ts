import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import * as firebase from 'firebase/app';
import { take, takeUntil } from 'rxjs/operators';
import { FirestoreService } from '../../services/firestore.service';
import { Movie, MovieVote } from '../../models/movie.model';
import { Subject } from 'rxjs';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Vote } from '../../models/votes.model';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit, OnDestroy {

  user: firebase.User;
  votingForm: FormGroup;
  private onDestroy$ = new Subject<void>();

  constructor(private authService: AuthService, private db: FirestoreService) {
  }

  ngOnInit() {
    this.authService.authState.pipe(take(1))
      .subscribe(user => {
        this.user = user;
      });

    this.votingForm = new FormGroup({
      movies: new FormArray(
        []
      )
    });

    this.db.col$<Movie>('/movies').pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(movies => {
      this.votingForm = new FormGroup({
        movies: new FormArray(
          movies.map(movie => {
            const vote: MovieVote = {
              ...movie,
              vote: Vote.NEUTRAL
            }
            return new FormControl(vote);
          })
        )
      });
    });
  }

  get movies(): FormArray {
    return this.votingForm.get('movies') as FormArray;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
