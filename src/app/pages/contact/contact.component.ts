import { ContactDto } from './../../data/Dto/contact.dto';
import { ContactService } from '../../services/contact/contact.service';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'hms-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  contactDto!: ContactDto;
  errorMessage!: string | null;
  successMessage!: string | null;
  IsLoading!: boolean;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [Validators.required]),
    });
  }
  setTimeOut(timeOut: number = 2000): void {
    setTimeout(() => {
      this.errorMessage = null;
      this.successMessage = null;
    }, timeOut);
  }
  getControl(name: string): AbstractControl | null {
    return this.contactForm.get(name);
  }

  hasError(controlName: string, errorName: string): boolean | undefined {
    return this.contactForm.get(controlName)?.hasError(errorName);
  }

  onSubmit(): void {
    this.contactDto = this.contactForm.value;
    this.IsLoading = true;
    this.contactService.contact(this.contactDto).subscribe({
      next: (res) => {
        if (res.statusCode == HttpStatusCode.Ok) {
          this.successMessage = res.message;
          this.IsLoading = false;
          this.setTimeOut(4000);
        } else {
          this.errorMessage = res.message?.message;
          this.IsLoading = false;
          this.setTimeOut(4000);
        }
      },
      error: (err) => {
        this.errorMessage = err.message.message;
        this.IsLoading = false;
        this.setTimeOut(3000);
      },
    });
  }
}
