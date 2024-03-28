import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  isAuthenticated(): boolean {
    if (this.isBrowser) {
      // Only try to access sessionStorage if on the browser platform
      return !!sessionStorage.getItem('isAuthenticated');
    } else {
      // Default to false or some server-side logic if not on browser
      return false;
    }
  }
}
