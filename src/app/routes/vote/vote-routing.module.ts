import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteComponent } from './vote.component';
import { UserGuard } from '../../guards/user.guard';

const routes: Routes = [
  {
    path: 'vote', component: VoteComponent, canActivate: [UserGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }
