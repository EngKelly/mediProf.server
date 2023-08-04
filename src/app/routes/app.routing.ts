import { AppointmentComponent } from './../pages/appointment/appointment.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
