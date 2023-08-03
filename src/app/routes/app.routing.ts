import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../pages/home/home.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
