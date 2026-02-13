import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
    username: new FormControl('', {
      nonNullable:true,
      validators: [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_]{3,20}$'),
      ]
    }),
    password: new FormControl('', {
      nonNullable:true,
      validators: Validators.required,
    }),
  });

  onSubmit = () => {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return
    }
    this.errorMessage.set(null)
    this.loginForm.disable()
    this.isLoading.set(true)

    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe({
        next: (value) => {
          this.isLoading.set(false)
          if(value.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (value.role === 'host') {
            this.router.navigate(['/host']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.loginForm.enable()
          if (err.status === 0){
            this.errorMessage.set("Sorry. There is server a error, will fix it soon.")
          } else {
            this.errorMessage.set(err.error.detail)
          }
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
