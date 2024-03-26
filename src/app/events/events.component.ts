import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    HeaderComponent,
    RouterModule,

  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events = [
    {
      title: 'Bitcoin Etcasi',
      description: 'Bitcoin Etcasi is a pioneering company in the world of cryptocurrency, proudly asserting its African ownership and roots.',
      imageUrl: '/assets/images/media.png',
      categoryIcon: 'category_icon_here',
      settingsIcon: 'settings_icon_here'
    },
    {
      title: 'SATS to GO!',
      description: 'SATS to GO! emerges as a trailblazing force in the realm of Bitcoin products, offering an innovative solution that seamlessly integrates with the fast-paced world of digital currencies.',
      imageUrl: '/assets/images/media1.png',
      categoryIcon: 'category_icon_here',
      settingsIcon: 'settings_icon_here'
    },
    {
      title: 'African Bitcoin Builders',
      description: "In the heart of Africa's dynamic and burgeoning cryptocurrency scene, the 'African Bitcoin Builders' community takes center stage, showcasing a commitment to collaboration, education, and innovation within the Bitcoin space.",
      imageUrl: '/assets/images/media2.png',
      categoryIcon: 'category_icon_here',
      settingsIcon: 'settings_icon_here'
    }
    // Add more events as needed
  ];
}
