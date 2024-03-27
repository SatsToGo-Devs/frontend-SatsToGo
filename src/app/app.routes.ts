import { Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { EventsComponent } from './events/events.component';
import { LoadingComponent } from './loading/loading.component';
import { EventComponent } from './event/event.component';
import { EventRewardComponent } from './event-reward/event-reward.component';
import { RewardComponent } from './reward/reward.component';

export const routes: Routes = [
    { path: 'loading', component: LoadingComponent },
    { path: 'authenticate', component: AuthenticateComponent },
    { path: 'events', component: EventsComponent },
    { path: 'event', component: EventComponent },
    { path: 'event-reward', component: EventRewardComponent },
    { path: 'reward', component: RewardComponent },
    { path: '', redirectTo: '/loading', pathMatch: 'full' }
  ];