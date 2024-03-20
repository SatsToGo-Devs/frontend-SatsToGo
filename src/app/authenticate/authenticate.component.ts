import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [
    QRCodeModule,
    HeaderComponent,

  ],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent {
  qrsize: number = 350; // You can adjust the size as needed

  qrdata: string = '340 287 497 233340 287 497 233340 287 497 233'; // data to encode

}
