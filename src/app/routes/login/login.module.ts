import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceModule } from '../../services/auth-service/auth-service.module';
import { GuardsModule } from '../../guards/guards.module';
import { FirestoreModule } from '../../services/firestore/firestore.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
    FirestoreModule,
    RouterModule,
    AuthServiceModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
