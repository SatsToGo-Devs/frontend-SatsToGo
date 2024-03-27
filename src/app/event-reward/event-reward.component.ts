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

@Component({
  selector: 'app-event-reward',
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
    RouterModule
  ],
  templateUrl: './event-reward.component.html',
  styleUrl: './event-reward.component.css'
})
export class EventRewardComponent {
  public imagePath = '/assets/images/event-avatar.png';
  currentTime = new Date(); // current time


  public event = {
    title: 'SATs to GO!',
    date: new Date('2023-11-23T08:00:00'), // Date object representing Nov 23, 2023
    time: '08:00 AM',
    additionalInfo: 'SATS to GO! emerges as a trailblazing force in the realm of Bitcoin products, offering an innovative solution that seamlessly integrates with the fast-paced world of digital currencies.'
  };
  public formattedDate: string = "";


  constructor() { 

  }

  ngOnInit(): void {
    // Initialization logic if necessary
    this.formattedDate = this.formatDate(this.event.date);

  }

  private formatDate(date: Date): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
