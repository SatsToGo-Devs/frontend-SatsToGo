import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isBrowser: boolean;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isBrowser) {
      // If not in browser environment
      return false;
    }

    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      // If the user is authenticated, allow access
      return true;
    } else {
      // Otherwise, redirect to the authentication page
      this.router.navigate(['/authenticate']);
      return false;
    }
  }
  
}
