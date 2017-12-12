import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth-service/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class VisitorGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authState.pipe(
      map(user => user === null),
      tap(isVisitor => {
        if(!isVisitor) {
          this.router.navigate(['vote']);
        }
      })
    );
  }
}
