import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {Router, RouterLink} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})

export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  isLoading = signal<boolean>(false)
  errorMessage = signal<string | null>(null)

  protected loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit = () => {
    if (this.loginForm.invalid) return;
    this.errorMessage.set(null)
    this.loginForm.disable()
    this.isLoading.set(true)

    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe({
        next: (value) => {
          this.isLoading.set(false)
          if(value.role === 'admin') {
            this.router.navigate(['/']);
          } else if (value.role === 'host') {
            this.router.navigate(['/']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.loginForm.enable()
          this.errorMessage.set(err.error.detail)
          this.isLoading.set(false)
        }
      })
  }

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }
}
