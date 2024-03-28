import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SatstogoService } from '../service/satstogo.service';
import { WebsocketService } from '../service/websocket.service';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [
    QRCodeModule,
    HeaderComponent,
    HttpClientModule,

  ],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent implements OnInit {
  isAuthenticated = false;
  qrsize: number = 350; // You can adjust the size as needed
  qrCode: any = ""
  displayedData: string = '';

  constructor(private satstogoService: SatstogoService, private websocketService: WebsocketService, private router: Router) {
    this.authQrCode();
  }
  ngOnInit(): void {
    this.isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    if (this.isAuthenticated) {
      this.router.navigate(['/events']);
    }
    this.websocketService.messages$.subscribe({
      next: (message) => {
        console.log('WebSocket message:', message);
        if (message.type === 'auth_verification' && message.status === 'OK') {
          this.isAuthenticated = true; // Update the flag based on the message
          console.log(message.message); // "Verification Successful"

          // Save the authentication state in session storage
          sessionStorage.setItem('isAuthenticated', 'true');

          // Navigate to another page
          this.router.navigate(['/events']);
        }
      },
      error: (error) => console.error('WebSocket error:', error),
    });
  }

  authQrCode() {
    this.satstogoService.generateAuth().subscribe({
      next: (response) => {
        debugger
        this.qrCode = response.encoded;
        this.displayedData = this.truncateData(this.qrCode);
        console.log(response);

        // Connect to WebSocket using the magic string (k1) received
        const k1 = response.magic_string; // Assuming `magic_string` is the key returned by your service
        this.websocketService.connect(k1);
      },
      error: (error) => console.error(error)
    });
  }

  truncateData(data: string, length: number = 40): string {
    return data.length > length ? data.substring(0, length) + '...' : data;
  }
}
