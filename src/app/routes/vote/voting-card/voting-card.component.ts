import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  vote: string;
  propagateChange = (_: any) => {};

  writeValue(value: string | null) {
    if (value !== undefined) {
      this.vote = value;
    }
  }
  
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}

  constructor() { }

  ngOnInit() {
  }

}
