import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    setTimeout(() => {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }, 50);
  }
}
