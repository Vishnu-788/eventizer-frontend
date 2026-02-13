import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {AuthService} from '../../../core/services/auth-service/auth-service';

@Component({
  selector: 'app-navbar-component',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  private authService = inject(AuthService)
  username = this.authService.getUsername()
}
