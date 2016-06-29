import {Injectable} from '@angular/core';
import { provideRouter, RouterConfig, CanActivate, Router,
  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthService} from '../services/auth.service.ts';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn) return true;

    this.router.navigate(['login']);
    return false;
  }
}