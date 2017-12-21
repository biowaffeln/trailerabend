import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { User } from '../user.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userDataSource: MatTableDataSource<User>;
  displayedCols = ['userName', 'id'];

  constructor(private db: FirestoreService) { }

  ngOnInit() {
    this.userDataSource = new MatTableDataSource();
    this.db.col$<User>('users').subscribe(users => {
      this.userDataSource.data = users;
    });
  }

}
