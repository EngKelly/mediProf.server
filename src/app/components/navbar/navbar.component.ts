import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'hms-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  IsOpen!: boolean;
  IsMobile!: boolean;
  constructor() {}

  ngOnInit() {
    this.handleWindowResize();
  }

  toggle(): void {
    this.IsOpen = !this.IsOpen;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.handleWindowResize();
    console.log(this.IsMobile);
  }

  handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.IsMobile = true;
    } else {
      this.IsMobile = false;
    }
  }
}
