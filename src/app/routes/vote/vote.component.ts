import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import * as firebase from 'firebase/app';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  user: firebase.User;

  constructor(private authService: AuthService) {
    this.authService.authState.pipe(
      take(1)
    )
    .subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
