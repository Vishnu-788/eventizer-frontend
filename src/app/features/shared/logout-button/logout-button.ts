import {Component, inject} from '@angular/core';
import {AuthService} from '../../../core/services/auth-service/auth-service';

@Component({
  selector: 'app-logout-button',
  imports: [],
  templateUrl: './logout-button.html',
  styleUrl: './logout-button.scss',
})
export class LogoutButton {
  private authService = inject(AuthService);
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logged out');
      },
      error: (err) => {
        console.error("error occured in logout"+err)
      }
    })
  }
}
