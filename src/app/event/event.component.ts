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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Event } from '../events/events.component';
interface Person {
  imageUrl: string;
  name: string;
}

@Component({
  selector: 'app-event',
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
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  event!: Event;

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.event = navigation.extras.state['event'];
    }
  }

  public imagePath = '/assets/images/event-banner.png';
  public invitedPeople: Person[] = [
    // Populate this array with your invited people data
    { imageUrl: '/assets/images/avatar.png', name: 'Alice' },
    { imageUrl: '/assets/images/avatar.png', name: 'Bob' },
    { imageUrl: '/assets/images/avatar.png', name: 'Charlie' },
    { imageUrl: '/assets/images/avatar.png', name: 'Diana' },
    { imageUrl: '/assets/images/avatar.png', name: 'Eve' },
    { imageUrl: '/assets/images/avatar.png', name: 'Frank' },
  ];

  // public event = {
  //   title: 'SATs to GO!',
  //   date: new Date('2023-11-23T08:00:00'), // Date object representing Nov 23, 2023
  //   time: '08:00 AM',
  //   additionalInfo: 'SATS to GO! emerges as a trailblazing force in the realm of Bitcoin products, offering an innovative solution that seamlessly integrates with the fast-paced world of digital currencies.'
  // };
  public formattedDate: string = "";


  ngOnInit(): void {
    // Initialization logic if necessary
    this.formattedDate = this.formatDate(this.event.date);

  }

  private formatDate(date: Date): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  goEventReward(event: Event) {
    this.router.navigate(['/event-reward', event.id], {
      state: { event: event }
    });
  }
}
