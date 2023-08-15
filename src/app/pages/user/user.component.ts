import { AuthService } from './../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from '../../data/Dto/auth/user.dto';

@Component({
  selector: 'hms-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user!: UserDto | undefined;
  userId!: string;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    @Inject(ActivatedRoute) private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['userId'];
    this.userService.getUser(this.userId).subscribe({
      next: (response) => {
        this.user = response.data;
        console.log(this.user);
      },
      error: (err) => {
        console.log('Error getting the current logged in user');
      },
    });
  }

  logout(): void {
    if (this.authService.logout()) {
      window.location.assign('');
    }
  }
}
