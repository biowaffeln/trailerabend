import { TestBed, async, inject } from '@angular/core/testing';

import { NoAdminGuard } from './no-admin.guard';
import { AuthService } from '../services/auth-service/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../environments/environment';

describe('NoAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAdminGuard, AuthService],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ]
    });
  });

  it('should let unregistered users in', inject([NoAdminGuard], (guard: NoAdminGuard) => {
    guard.canActivate().subscribe(res => {
      expect(res).toBeTruthy();
    });
  }));
});
