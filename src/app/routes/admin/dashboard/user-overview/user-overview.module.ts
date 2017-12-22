import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './user-overview.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { LoaderModule } from '../../../../shared/loader/loader.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LoaderModule,
    RouterModule
  ],
  declarations: [UserOverviewComponent],
  exports: [UserOverviewComponent]
})
export class UserOverviewModule { }
