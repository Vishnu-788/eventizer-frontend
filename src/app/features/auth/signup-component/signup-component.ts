import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-signup-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.scss',
})
export class SignupComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  errorMessage = signal<string|null>(null)

  signupForm = new FormGroup({
    username: new FormControl('', {
      nonNullable:true,
      validators: [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_]{3,20}$'),
      ]
    }),

    email: new FormControl('', {
      nonNullable:true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),

    password: new FormControl('', {
      nonNullable:true,
      validators: Validators.required,
    }),

    isHost: new FormControl(false)
  })

  private handleServerErrors(errors: any) {
    if(errors.username){
      this.errorMessage.set(errors.username);
    } else if (errors.email){
      this.errorMessage.set(errors.email);
    } else {
      this.errorMessage.set("Unable to signup. Try again later.");
    }
  }

  protected username() {
    return this.signupForm.controls.username;
  }

  onSubmit() {
    this.errorMessage.set(null)
    const {isHost, ...rest} = this.signupForm.getRawValue();
    const payload = {
      username: rest.username,
      email: rest.email,
      password: rest.password,
      role: isHost? 'host':'user'
    }
    this.authService.signup(payload).subscribe({
      // Handle the success
      next: value => {
        if(value.role === 'host') {
          this.router.navigate(['/'])
        } else if (value.role === 'admin') {
          this.router.navigate(['/'])
        } else {
          this.router.navigate(['/'])
        }
      },
      //handle the error
      error: (err: HttpErrorResponse) => {
        if (err.status === 400 && err.error) {
          this.handleServerErrors(err.error);
        }
      }
    })
  }
}
