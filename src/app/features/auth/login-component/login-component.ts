import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService)
  protected loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit = () => {
    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe({
        next: value => {
          console.log("Success: " + value.username);
        },
        error: err => {
          console.error("Error: " + err.toString());
          console.error("Error Message: " + err.error.detail)
        }
      })
  }
}
