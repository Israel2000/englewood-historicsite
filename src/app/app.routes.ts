import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';

import { AboutComponent } from './components/about/about';
import { HistoryComponent } from './components/history/history';
import { EventsComponent } from './components/events/events';
import { GalleryComponent } from './components/gallery/gallery';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'events', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];