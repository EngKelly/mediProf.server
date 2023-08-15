import { ReplyMessageComponent } from './components/modals/message/reply-message.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactsComponent } from './admin/contacts/contacts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './extension/title.strategy';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UsersComponent } from './admin/users/users.component';
import { UserComponent } from './pages/user/user.component';
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
    LoginComponent,
    SignupComponent,
    ReplyMessageComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
