import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MatTableModule, MatCardModule, MatButtonModule } from '@angular/material';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    LoaderModule
  ],
  declarations: [UserListComponent],
})
export class UserListModule { }
