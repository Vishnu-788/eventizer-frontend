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
  private navbarService = inject(NavbarTitleService)
  private authService = inject(AuthService)
  protected displayName = signal(this.getDisplayName())
  protected displayChar = signal(this.getDisplayChar())
  title = this.navbarService.title

  getDisplayChar() {
    return this.getDisplayName()?.charAt(0).toUpperCase()
  }
  getDisplayName() {
    const fullName = this.authService.getFullName()?.trim()
    if(fullName) {
      return fullName
    }
    return this.authService.getUsername()
  }
}
