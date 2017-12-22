import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { Movie } from '../../../../models/movie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  jsonInput: FormControl;

  constructor() { }

  ngOnInit() {
    this.jsonInput = new FormControl('', [Validators.required, this.movieValidator]);
  }

  movieValidator = (control: AbstractControl): ValidationErrors | null => {
    try {
      const obj = JSON.parse(control.value);
      return this.isMovieArray(obj) ? null : { notMovie: true };
    } catch (e) {
      return { parseError: true };
    }
  }

  isMovieArray(obj: any): obj is Movie[] {
    if (!Array.isArray(obj)) {
      return false;
    }
    return obj.every(movie => {
      return typeof movie.link === 'string' && typeof movie.name === 'string';
    });
  }

}
