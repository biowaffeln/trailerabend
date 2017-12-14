import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nameForm: FormControl;

  constructor(private authService: AuthService, private router: Router,
    private db: FirestoreService) {
  }

  ngOnInit() {
    this.nameForm = new FormControl('', {
      validators: Validators.required
    });
  }

  async signIn(name: string) {
    await this.authService.anonymousLogin(name);
    this.authService.authState.pipe(
      take(1)
    )
    .subscribe(user => {
      this.db.set(`user/${user.uid}`, { name });
    });
    this.router.navigate(['vote']);
  }

}
