import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGuard } from './user.guard';
import { VisitorGuard } from './visitor.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [],
  providers: [UserGuard, VisitorGuard]
})
export class GuardsModule { }
