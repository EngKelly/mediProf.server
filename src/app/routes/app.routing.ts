import { ContactsComponent } from '../admin/contacts/contacts.component';
import { AppointmentComponent } from './../pages/appointment/appointment.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { authGuard } from '../guard/auth/auth.guard';
import { roleGuard } from '../guard/role/role.guard';

export const route: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'admin/contacts',
    component: ContactsComponent,
    canActivate: [authGuard, roleGuard],
  },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  {
    path: 'appointment',
    component: AppointmentComponent,
    title: 'Book Appointment',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
