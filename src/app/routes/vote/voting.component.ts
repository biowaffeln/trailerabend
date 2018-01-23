import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import * as firebase from 'firebase/app';
import { take, takeUntil, tap } from 'rxjs/operators';
import { FirestoreService } from '../../services/firestore.service';
import { Movie, VoteMovie } from '../../models/movie.model';
import { Subject } from 'rxjs';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Vote } from '../../models/votes.model';
import { switchMap } from 'rxjs/operators/switchMap';
import { User } from '../../models/user.model';
import { LoaderType } from '../../shared/loader/loader.model';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit, OnDestroy {

  user: User;
  uid: string;
  votingForm: FormGroup;
  spinner = LoaderType.SPINNER;
  loaded = false;
  private onDestroy$ = new Subject<void>();

  constructor(private authService: AuthService, private db: FirestoreService) {
  }

  async ngOnInit() {

    this.votingForm = new FormGroup({
      movies: new FormArray([])
    });
    this.votingForm.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(({ movies }: { movies: VoteMovie[] }) => {
      const votes = movies.reduce((acc, movie) => {
        acc[movie.id] = movie.vote
        return acc;
      }, {});
      this.db.update<User>(`users/${this.uid}`, { votes });
    });

    this.authService.authState.pipe(
      tap(auth => this.uid = auth.uid),
      switchMap(auth => this.db.doc$<User>(`/users/${auth.uid}`)),
      tap(user => this.user = user),
      take(1),
      switchMap(() => this.db.col$<Movie>('/movies')),
      takeUntil(this.onDestroy$)
    )
      .subscribe(movies => {
        this.votingForm.setControl('movies',
          new FormArray(
            movies.map(movie => {
              const vote: VoteMovie = {
                ...movie,
                vote: this.user.votes[movie.id] ? this.user.votes[movie.id] : Vote.NEUTRAL
              }
              return new FormControl(vote);
            })
          )
        );
        this.loaded = true;
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
