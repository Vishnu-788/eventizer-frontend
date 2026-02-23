import {Component, inject, signal} from '@angular/core';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  private authService = inject(AuthService)
  private titleService = inject(NavbarTitleService)
  fullName = signal(this.authService.getFullName())
  username = signal(this.authService.getUsername())
  title = this.titleService.title
}
