import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MatTableModule, MatCardModule } from '@angular/material';
import { LoaderModule } from '../../../../shared/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    LoaderModule
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UserListModule { }
