import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SatstogoService } from '../service/satstogo.service';

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
export class AuthenticateComponent {
  constructor(private satstogoService: SatstogoService) {
    this.authQrCode()
  }
  qrsize: number = 350; // You can adjust the size as needed

  qrCode: any
  authQrCode() {
    debugger
    this.satstogoService.generateAuth().subscribe({
      next: (response) => {
        debugger
        this.qrCode = response.encoded
        this.displayedData = this.truncateData(this.qrCode);

        console.log(response);
      },
      error: (error) => console.error(error)
    });
  }


  displayedData: string='';

  truncateData(data: string, length: number = 40): string {
    return data.length > length ? data.substring(0, length) + '...' : data;
  }
}
