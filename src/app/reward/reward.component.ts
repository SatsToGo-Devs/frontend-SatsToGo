import { Component, Input } from '@angular/core';
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
import { RouterModule } from '@angular/router';
import { SatstogoService } from '../service/satstogo.service';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
export class RewardComponent {

  constructor(private satstogoService: SatstogoService) {
    this.callApi()
  }

  callApi() {
    const params = {
      title: 'Reward',
      min_withdrawable: '11',
      max_withdrawable: '11',
    };

    this.satstogoService.generateLnurl(params).subscribe({
      next: (response) => {
        debugger; // This will pause execution here when the developer tools are open.
        // example of type of response 
        //   {
        //     "id": "A3yV8wQZho6ACDY535DHr8",
        //     "wallet": "7b82a8eef0d84146b35552a1742cb157",
        //     "title": "Test1",
        //     "min_withdrawable": 10,
        //     "max_withdrawable": 20,
        //     "uses": 1,
        //     "wait_time": 1,
        //     "is_unique": true,
        //     "unique_hash": "8AnEu39thcUTvicSGF7yWK",
        //     "k1": "6pwqe8FLomGAcAGqLTkKUi",
        //     "open_time": 1711497523,
        //     "used": 0,
        //     "usescsv": "0",
        //     "number": 0,
        //     "webhook_url": null,
        //     "webhook_headers": null,
        //     "webhook_body": null,
        //     "custom_url": null,
        //     "lnurl": "LNURL1DP68GURN8GHJ7MR9VAJKUEPWD3HXY6T5WVHXXMMD9AMKJARGV3EXZAE0V9CXJTMKXYHKCMN4WFKZ7WZPDEZH2VEEW35XX425WE5KX568GCMHJ46T9AG85WZX23HNJ7Z9TYERYEN9GEH8G6ZC2F8XYMXD8NH"
        // }
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

  displayedData: string='';



  truncateData(data: string, length: number = 40): string {
    return data.length > length ? data.substring(0, length) + '...' : data;
  }
}
