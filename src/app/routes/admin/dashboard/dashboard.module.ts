import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UserOverviewModule } from './user-overview/user-overview.module';
import { MovieOverviewModule } from './movie-overview/movie-overview.module';

@NgModule({
  imports: [
    CommonModule,
    UserOverviewModule,
    MovieOverviewModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
