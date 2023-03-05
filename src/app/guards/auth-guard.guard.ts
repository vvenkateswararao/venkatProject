import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServService } from '../services/serv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard {
  constructor(private service: ServService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service?.isUserLogged) {
        return true;
      }
    return false;
  }
  
}
