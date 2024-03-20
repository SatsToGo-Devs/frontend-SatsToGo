import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
 progressValue = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    const interval = setInterval(() => {
      this.progressValue += 100 / (5000 / 50); // Increment the progress value over 5 seconds
      if (this.progressValue >= 100) {
        clearInterval(interval);
        this.router.navigate(['/events']); // Navigate to '/events' when progress is complete
      }
    }, 30);
  }
}
