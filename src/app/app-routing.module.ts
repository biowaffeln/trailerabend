import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { VotingComponent } from './routes/vote/voting.component';
import { UserGuard } from './guards/user.guard';
import { VisitorGuard } from './guards/visitor.guard';
import { AdminComponent } from './routes/admin/admin.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [VisitorGuard]
  },
  {
    path: 'vote', component: VotingComponent, canActivate: [UserGuard]
  },
  {
    path: 'playlist', loadChildren: './routes/playlist/playlist.module#PlaylistModule'
  },
  {
    path: 'admin', loadChildren: './routes/admin/admin.module#AdminModule'
  },
  {
    path: '**', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
