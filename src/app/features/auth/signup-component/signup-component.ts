import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service/auth-service';
import {Router, RouterLink} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-signup-component',
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.scss',
})

export class SignupComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  isLoading = signal<boolean>(false)
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

  onSubmit() {
    if(this.signupForm.invalid) return

    this.signupForm.disable()
    this.isLoading.set(true);
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
        this.isLoading.set(false);
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
        this.signupForm.enable()
        if (err.status === 400 && err.error) {
          this.handleServerErrors(err.error);
        }
      }
    })
  }

  private handleServerErrors(errors: any) {
    /*
      Handles the non unique account errors from the server
   */
    if(errors.username){
      const control = this.signupForm.get('username')
      if(control){
        control.setErrors({
          notUnique:true,
        })
      }
    }
    if(errors.email){
      const control = this.signupForm.get('email')
      if(control){
        control.setErrors({
          notUnique:true,
        })
      }
    }
  }

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
