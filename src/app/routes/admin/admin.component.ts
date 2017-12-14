import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
      'email': ['', Validators.required],
      'pass': ['', Validators.required]
    });
  }

  async loginAdmin(formValue: any) {
    try {
      await this.authService.emailLogin(formValue.email, formValue.pass);
      this.router.navigate(['admin', 'dashboard']);
    } catch (e) {
      console.log(e);
    }
  }

}
