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
  event!: Event;
  isRewarded: boolean = false

  // constructor(private router: Router, private route: ActivatedRoute) {
  //   const navigation = this.router.getCurrentNavigation();
  //   if (navigation?.extras.state) {
  //     this.event = navigation.extras.state['event'];
  //     this.isRewarded = 
  //   }
  // }

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.event = navigation.extras.state['event'];
  
      const eventTime = new Date();
      const [hours, minutes] = this.event.time.split(':').map(Number);
      eventTime.setHours(hours, minutes);
  
      const currentTime = new Date();
  
      // checks if the currentTime is before the eventTime
      this.isRewarded = currentTime < eventTime;
    }
  }

  

  claimSats(event: Event){
    this.router.navigate(['/reward', event.id], {
      state: { event: event }
    });

  }
}
