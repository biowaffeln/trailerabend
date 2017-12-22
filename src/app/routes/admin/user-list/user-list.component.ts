import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../../models/user.model';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userDataSource: MatTableDataSource<User>;
  displayedCols = ['userName', 'voted'];
  loading: boolean;

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.userDataSource = new MatTableDataSource();
    this.loading = true;
    this.db.col$<User>('/users').subscribe(users => {
      this.userDataSource.data = users;
      this.loading = false;
    });
  }
}
