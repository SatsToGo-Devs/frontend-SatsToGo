import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { SatstogoService } from '../service/satstogo.service';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WebsocketService } from '../service/websocket.service';
import { Event } from '../events/events.component';

@Component({
  selector: 'app-reward',
  standalone: true,
  imports: [    
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    HeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    QRCodeModule,
    HttpClientModule,

  ],
  templateUrl: './reward.component.html',
  styleUrl: './reward.component.css'
})
export class RewardComponent implements OnInit{
  event!: Event;
  displayedData: string='';

  constructor(private satstogoService: SatstogoService,  private websocketService: WebsocketService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.event = navigation.extras.state['event'];
    }
    this.callApi()
  }
  ngOnInit(): void {
    this.websocketService.messages$.subscribe({
      next: (message) => {
        debugger
        console.log('WebSocket message:', message);
        if (message.type === 'payment_status' && message.status === 'OK') {
          console.log(message.message); // "Verification Successful"
          this.router.navigate(['/events']);
          // You might want to navigate to another page or show a success message
        }
      },
      error: (error) => console.error('WebSocket error:', error),
    });
  }

  callApi() {
    const params = {
      title: " 🎉 " + this.event.title + " Reward",
      min_withdrawable: this.event.reward,
      max_withdrawable: this.event.reward,
    };

    this.satstogoService.generateLnurl(params).subscribe({
      next: (response) => {
        this.qrdata = response.lnurl.lnurl
        this.displayedData = this.truncateData(this.qrdata);

        console.log(response);
      },
      error: (error) => console.error(error)
    });
  }


  claimRewards() {
    // Implement the logic for claiming rewards here
    // This could involve navigating to another route or calling an API endpoint
  }

  qrsize: number = 350; // You can adjust the size as needed

  qrdata: string = ''; // data to encode

  closeEarlyBird() {
    // Logic to handle the closing of the early bird message
  }




  truncateData(data: string, length: number = 40): string {
    return data.length > length ? data.substring(0, length) + '...' : data;
  }
}
