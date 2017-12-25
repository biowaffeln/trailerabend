import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { GuardsModule } from '../../guards/guards.module';
import { MoviesModule } from './movies/movies.module';
import { UserListModule } from './user-list/user-list.module';
import { LiveResultsModule } from './live-results/live-results.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardModule,
    MoviesModule,
    UserListModule,
    GuardsModule,
    LiveResultsModule,
    MatCardModule, MatInputModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
