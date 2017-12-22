import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material';
import { UserListModule } from './user-list/user-list.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    UserListModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
