import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {AuthService} from '../../../core/services/auth-service/auth-service';

@Component({
  selector: 'app-host-navbar-component',
  imports: [

  ],
  templateUrl: './host-navbar-component.html',
  styleUrl: './host-navbar-component.scss',
})
export class HostNavbarComponent {
  navbarService = inject(NavbarTitleService)
  authService = inject(AuthService)
  displayName = signal(this.getDisplayName())
  title = this.navbarService.title

  getDisplayName() {
    const fullName = this.authService.getFullName()?.trim()
    if(fullName) {
      return fullName
    }
    return this.authService.getUsername()
  }
}
