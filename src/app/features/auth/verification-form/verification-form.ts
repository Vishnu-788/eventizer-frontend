import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-verification-form',
  imports: [],
  templateUrl: './verification-form.html',
  styleUrl: './verification-form.scss',
})
export class VerificationForm {
  verifyFrom = new FormGroup({
    company_name: new FormControl(''),
    company_email: new FormControl(''),
    company_phone: new FormControl(''),
  })
}
