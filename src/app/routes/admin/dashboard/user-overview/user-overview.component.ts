import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user.model';
import { FirestoreService } from '../../../../services/firestore.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  users: User[];

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.db.col$<User>('/users').subscribe(users => {
      this.users = users;
    });
  }

  voted(users: User[]): User[] {
    return users.filter(user => user.voted);
  }

}
