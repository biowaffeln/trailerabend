import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from '../../guards/admin.guard';
import { NoAdminGuard } from '../../guards/no-admin.guard';
import { MoviesComponent } from './movies/movies.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [NoAdminGuard]
  },
  {
    path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminGuard]
  },
  {
    path: 'admin/movies', component: MoviesComponent, canActivate: [AdminGuard]
  },
  {
    path: 'admin/user-list', component: UserListComponent, canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
