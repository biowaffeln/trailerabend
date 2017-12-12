import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nameForm: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.nameForm = new FormControl('', {
      validators: Validators.required
    });
  }

  signIn(name: string) {
    console.log(`Oh hi, ${name}!`);
  }

}
