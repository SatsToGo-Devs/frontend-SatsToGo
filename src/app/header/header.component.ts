import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corrected styleUrl to styleUrls
})
export class HeaderComponent {
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public authService: AuthService, 
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  logout() {
    if (this.isBrowser) {
      // Only attempt to access sessionStorage if in a browser environment
      sessionStorage.removeItem('isAuthenticated');
      // Possibly notify the backend about the logout
      // Redirect to the login page or any other public page
      this.router.navigate(['/authenticate']);
    }
  }
}
