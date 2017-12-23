import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth-service/auth.service';
import { pipe } from 'rxjs/Rx';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authState.pipe(
      map(user => user !== null),
      tap(isUser => {
        if (!isUser) {
          this.router.navigate(['login']);
        }
      })
    );
  }
}
