import { TestBed, async, inject } from '@angular/core/testing';

import { UserGuard } from './user.guard';
import { AuthService } from '../services/auth-service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

describe('UserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGuard, AuthService],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ]
    });
  });

    it('should reject unregistered users', inject([UserGuard], (guard: UserGuard) => {
    guard.canActivate().subscribe(res => {
      expect(res).toBeFalsy();
    });
  }));
});
