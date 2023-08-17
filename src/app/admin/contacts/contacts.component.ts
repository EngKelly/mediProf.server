import { ContactDto } from './../../data/Dto/contact.dto';
import { Component } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { HttpStatusCode } from '@angular/common/http';
import { JwtService } from '../../services/utils/jwt.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'hms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contacts!: ContactDto[] | undefined | null;
  successMessage!: string;
  errorMessage!: string;
  infoMessage!: string;
  IsFetching: boolean = false;
  IsDeleting: boolean = false;
  username?: string;
  token!: any;
  mailto: string = 'mailto:';
  contactUserEmail!: string;
  page = 1;
  limit = 10;
  totalItems!: number;

  constructor(
    private contactService: ContactService,
    private jwtService: JwtService,
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    this.getContacts(this.page, false, this.limit);
    this.token = this.jwtService.decodeJwtToken();
  }

  setTimeOut(timeOut: number = 2000): void {
    setTimeout(() => {
      this.errorMessage = '';
      this.infoMessage = '';
    }, timeOut);
  }

  passEmail(index: number) {
    const email: string = this.contacts![index].email;
    this.contactUserEmail = email;
    this.clipboard.copy(email);
    console.log('clicked');
  }

  trackByFn(index: number, item: any): any {
    return item.id; // or some other unique identifier of the item
  }

  private getContacts(
    page: number = 1,
    IsFetchByMonth: boolean = false,
    limit: number = 20
  ): void {
    this.IsFetching = true;
    this.contactService.getContacts(page, IsFetchByMonth, limit).subscribe({
      next: (res) => {
        if (res.statusCode == HttpStatusCode.Ok) {
          this.contacts = res.data;
          this.successMessage = `${res.data?.length} messages was found.`;
          this.totalItems = res.data.length;
          this.IsFetching = false;
        } else if (res.data == null) {
          this.infoMessage = 'This are the last contacts in the contact list';
          this.IsFetching = false;
          this.setTimeOut(3000);
        } else {
          this.errorMessage =
            'Sorry something unexpected happened while fetching you message try again';
          this.IsFetching = false;
          this.setTimeOut(4000);
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message.message;
        this.IsFetching = false;
      },
    });
  }

  pageChanged(event: PageEvent) {
    const page: number = event.pageIndex + 1;
    this.getContacts(page, false, event.pageSize);
  }

  deleteContact(msgId: string): void {
    this.IsDeleting = true;
    this.contactService.deleteContact(msgId).subscribe({
      next: (res) => {
        if (res.statusCode == HttpStatusCode.Ok || res.data?.deleted) {
          this.successMessage = res.message;
          this.IsDeleting = false;
          this.setTimeOut(3000);
        }
        this.IsDeleting = false;
        this.setTimeOut(3000);
      },
      error: (err) => {
        this.errorMessage = err.error.message.message;
        this.IsDeleting = false;
        this.setTimeOut(3000);
      },
    });
  }
}
