import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';
import { Movie } from '../../../../models/movie.model';
import { FirestoreService } from '../../../../services/firestore.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  addMovieForm: FormGroup;
  saving = false;

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.addMovieForm = new FormGroup({
      json: new FormControl('', [Validators.required, this.movieValidator]),
    });
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
    if (!Array.isArray(obj) || !obj.length) {
      return false;
    }
    return obj.every(movie => {
      return (
        typeof movie.trailerlink === 'string' &&
        typeof movie.name === 'string'
      );
    });
  }

  async save(form: FormGroup) {

    if (form.invalid) { return; }
    this.saving = true;

    const movieData = JSON.parse(form.value.json) as Movie[];
    const dbPromises = movieData.map(movie => {
      return this.db.add<Movie>('/movies', movie);
    });
    await Promise.all(dbPromises);
    form.reset();
    this.saving = false;
  }

}
