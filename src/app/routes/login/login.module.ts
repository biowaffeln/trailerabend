import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
