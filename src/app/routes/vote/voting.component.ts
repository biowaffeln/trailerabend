import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import * as firebase from 'firebase/app';
import { take, takeUntil, tap } from 'rxjs/operators';
import { FirestoreService } from '../../services/firestore.service';
import { Movie, MovieVote } from '../../models/movie.model';
import { Subject } from 'rxjs';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Vote } from '../../models/votes.model';
import { switchMap } from 'rxjs/operators/switchMap';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit, OnDestroy {

  user: User;
  votingForm: FormGroup;
  private onDestroy$ = new Subject<void>();

  constructor(private authService: AuthService, private db: FirestoreService) {
  }

  async ngOnInit() {

    this.votingForm = new FormGroup({
      movies: new FormArray([])
    });
    this.votingForm.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(val => console.log(val));

    this.authService.authState.pipe(
      switchMap(auth => this.db.doc$<User>(`/users/${auth.uid}`)),
      tap(user => this.user = user),
      switchMap(() => this.db.col$<Movie>('/movies')),
      takeUntil(this.onDestroy$)
    )
      .subscribe(movies => {
        this.votingForm.setControl('movies',
          new FormArray(
            movies.map(movie => {
              const vote: MovieVote = {
                ...movie,
                vote: Vote.NEUTRAL
              }
              return new FormControl(vote);
            })
          )
        );
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
