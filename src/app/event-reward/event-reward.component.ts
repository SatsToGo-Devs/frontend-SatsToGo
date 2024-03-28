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
  public formattedDate: string = "";

  event!: Event;

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.event = navigation.extras.state['event'];
    }
  }


  ngOnInit(): void {
    // Initialization logic if necessary
    this.formattedDate = this.formatDate(this.event.date);

  }

  private formatDate(date: Date): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }


  claimSats(event: Event){
    this.router.navigate(['/reward', event.id], {
      state: { event: event }
    });

  }
}
