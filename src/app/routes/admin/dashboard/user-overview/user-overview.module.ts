import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './user-overview.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [UserOverviewComponent],
  exports: [UserOverviewComponent]
})
export class UserOverviewModule { }
