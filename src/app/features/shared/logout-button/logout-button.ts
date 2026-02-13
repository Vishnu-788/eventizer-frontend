import {Component, inject} from '@angular/core';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-button',
  imports: [],
  templateUrl: './logout-button.html',
  styleUrl: './logout-button.scss',
})

export class LogoutButton {
  private authService = inject(AuthService);
  private router = inject(Router)
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log(`Logout Button Logging: LoggedOut`)
        this.router.navigate(['/auth/login'])
      },
      error: (err) => {
        console.error("error occurred in logout " + err)
      }
    })
  }
}
