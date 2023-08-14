import { ContactDto } from './../../data/Dto/contact.dto';
import { Component } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { HttpStatusCode } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';

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
  sn: number = 0;
  mailto: string = 'mailto:';
  constructor(
    private contactService: ContactService,
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    this.getContacts();
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
          console.log(this.contacts);
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
    this.contactService
      .deleteContact(msgId)
      .subscribe({ next: (res) => {}, error: (err) => {} });
  }
}
