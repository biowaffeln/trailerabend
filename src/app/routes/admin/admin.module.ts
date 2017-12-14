import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { GuardsModule } from '../../guards/guards.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardModule,
    GuardsModule,
    MatCardModule, MatInputModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
