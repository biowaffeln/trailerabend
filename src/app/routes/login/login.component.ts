import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nameForm: FormControl;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.nameForm = new FormControl('', {
      validators: Validators.required
    });
  }

  async signIn(name: string) {
    await this.authService.anonymousLogin(name);
    this.router.navigate(['vote']);
  }

}
