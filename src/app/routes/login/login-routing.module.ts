import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { VisitorGuard } from '../../guards/visitor.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [VisitorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
