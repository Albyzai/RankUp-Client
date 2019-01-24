import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoggedInGuard } from './user-logged-in.guard';

@Injectable({
  providedIn: 'root'
})
export class NegateUserLoggedInGuard implements CanActivate {
  constructor(private userLoggedInGuard: UserLoggedInGuard) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return !this.userLoggedInGuard.canActivate(next, state);
  }
}
