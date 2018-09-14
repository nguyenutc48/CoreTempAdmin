import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable, Observer, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AuthRouteService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  public isLoggedIn: boolean = false;
  public redirectUrl: string;

  constructor(private router: Router, private authService: AuthRouteService) {}


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                this.redirectUrl = state.url;
                if (this.authService.isLoggedIn()) {
                  return true;
                }
                this.router.navigateByUrl('/login');
                return false;
  }
}
