import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hms-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [Validators.required]),
    });
  }

  getControl(name: string): AbstractControl | null {
    return this.contactForm.get(name);
  }

  hasError(controlName: string, errorName: string): boolean | undefined {
    return this.contactForm.get(controlName)?.hasError(errorName);
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }
}
