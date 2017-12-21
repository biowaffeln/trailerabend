import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MatTableModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UserListModule { }
