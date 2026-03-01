import {Component, inject, signal} from '@angular/core';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-admin-navbar-component',
  imports: [],
  templateUrl: './admin-navbar-component.html',
  styleUrl: './admin-navbar-component.scss',
})
export class AdminNavbarComponent {
  private authService = inject(AuthService)
  private titleService = inject(NavbarTitleService)
  title = this.titleService.title
  fullName = signal(this.authService.getFullName())
  username = signal(this.authService.getUsername())
}
