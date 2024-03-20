import { Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { EventsComponent } from './events/events.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [
    { path: 'loading', component: LoadingComponent },
    { path: 'authenticate', component: AuthenticateComponent },
    { path: 'events', component: EventsComponent },
    { path: '', redirectTo: '/loading', pathMatch: 'full' }
  ];