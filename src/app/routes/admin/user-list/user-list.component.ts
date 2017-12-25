import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSlideToggleChange } from '@angular/material';
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
  displayedCols = ['userName', 'voted', 'details'];
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

  updateVoted(event: MatSlideToggleChange, id: string) {
    this.db.update(`/users/${id}`, { voted: event.checked });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
