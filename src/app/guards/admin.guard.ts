import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth-service/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.authState.pipe(
      map(user => !!user && user.email !== null),
      tap(admin => {
        if (!admin) {
          this.router.navigate(['admin']);
        }
      })
    );
  }
}
