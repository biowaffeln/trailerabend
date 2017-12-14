import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGuard } from './user.guard';
import { VisitorGuard } from './visitor.guard';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { NoAdminGuard } from './no-admin.guard';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [],
  providers: [UserGuard, VisitorGuard, AdminGuard, NoAdminGuard]
})
export class GuardsModule { }
