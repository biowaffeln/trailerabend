import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MovieVote } from '../../../models/movie.model';
import { Vote } from '../../../models/votes.model';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VotingCardComponent),
      multi: true
    }
  ]
})
export class VotingCardComponent implements OnInit, ControlValueAccessor {

  movie: MovieVote;
  FOR = Vote.FOR;
  AGAINST = Vote.AGAINST;
  propagateChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }

  toggleVote(vote: Vote) {
    if (vote === this.movie.vote) {
      this.movie.vote = Vote.NEUTRAL;
    } else {
      this.movie.vote = vote;
    }
  }

  writeValue(value: MovieVote) {
    if (value !== undefined) {
      this.movie = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) { }

}
