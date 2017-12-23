import { TestBed, async, inject } from '@angular/core/testing';

import { VisitorGuard } from './visitor.guard';
import { AuthService } from '../services/auth-service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

describe('VisitorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitorGuard, AuthService],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ]
    });
  });

  it('should let unregistered users in', inject([VisitorGuard], (guard: VisitorGuard) => {
    guard.canActivate().subscribe(res => {
      expect(res).toBeTruthy();
    });
  }));
});
