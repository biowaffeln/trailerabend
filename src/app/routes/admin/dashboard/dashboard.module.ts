import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material';
import { UserModule } from '../../../shared/user/user.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    UserModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
