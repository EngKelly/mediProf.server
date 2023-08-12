import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactsComponent } from './admin/contacts/contacts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './extension/title.strategy';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    AppointmentComponent,
    ContactsComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
