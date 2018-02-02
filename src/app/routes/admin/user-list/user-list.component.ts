import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSlideToggleChange } from '@angular/material';
import { User } from '../../../models/user.model';
import { FirestoreService } from '../../../services/firestore.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  userDataSource: MatTableDataSource<User>;
  displayedCols = ['userName', 'voted', 'id'];
  loaded = false;

  private onDestroy$ = new Subject<void>();

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.userDataSource = new MatTableDataSource();
    this.db.col$<User>('/users').pipe(
      takeUntil(this.onDestroy$)
    )
      .subscribe(users => {
        this.userDataSource.data = users;
        this.loaded = true;
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
