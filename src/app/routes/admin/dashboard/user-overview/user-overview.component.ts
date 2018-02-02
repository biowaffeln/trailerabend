import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../../../models/user.model';
import { FirestoreService } from '../../../../services/firestore.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit, OnDestroy {

  users: User[];
  private onDestroy$ = new Subject<void>();

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.db.col$<User>('/users').pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe(users => {
      this.users = users;
    });
  }

  voted(users: User[]): User[] {
    return users.filter(user => user.voted);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
