import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../../models/user.model';
import { FirestoreService } from '../../../services/firestore.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  userDataSource: MatTableDataSource<User>;
  displayedCols = ['userName', 'voted'];
  loading: boolean;

  private onDestroy$ = new Subject<void>();

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.userDataSource = new MatTableDataSource();
    this.loading = true;
    this.db.col$<User>('/users').pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe(users => {
      this.userDataSource.data = users;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
