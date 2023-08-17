import { Component, Input } from '@angular/core';

@Component({
  selector: 'hms-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  @Input({ required: true })
  userEmail!: string;
}
