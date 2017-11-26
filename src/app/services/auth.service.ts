import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    login(data): boolean {
      window.localStorage.setItem('user', JSON.stringify(data));
      return true;
    }

    logout(): void {
        window.localStorage.removeItem('user');
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('user')) {
            return true;
        }

        this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url }
        });

        return false;
    }
}
