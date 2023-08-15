import { ContactDto } from './../../data/Dto/contact.dto';
import { Component } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { HttpStatusCode } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { JwtService } from '../../services/utils/jwt.service';

@Component({
  selector: 'hms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contacts!: ContactDto[] | undefined | null;
  successMessage?: string;
  errorMessage?: string;
  IsFetching: boolean = false;
  username?: string;
  token!: any;
  mailto: string = 'mailto:';
  constructor(
    private contactService: ContactService,
    private clipboard: Clipboard,
    private jwtService: JwtService
  ) {}

  ngOnInit() {
    this.getContacts();
    this.token = this.jwtService.decodeJwtToken();
  }

  copyText(text: string) {
    this.clipboard.copy(text);
  }

  private getContacts(): void {
    this.IsFetching = true;
    this.contactService.getContacts().subscribe({
      next: (res) => {
        if (res.statusCode == HttpStatusCode.Ok) {
          this.contacts = res.data;
          this.successMessage = `${res.data?.length} messages was found.`;
          this.IsFetching = false;
        } else {
          this.errorMessage =
            'Sorry something unexpected happened while fetching you message try again';
          this.IsFetching = false;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message.message;
      },
    });
  }

  deleteContact(msgId: string): void {
    this.IsFetching = true;
    this.contactService.deleteContact(msgId).subscribe({
      next: (res) => {
        if (res.message == HttpStatusCode.Ok) {
          this.successMessage = res.message;
          this.IsFetching = false;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message.message;
      },
    });
  }
}
