import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HostModel} from '../../../core/models/host.model';

@Component({
  selector: 'app-host-edit-form',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './host-edit-form.html',
  styleUrl: './host-edit-form.scss',
})
export class HostEditForm {
  host!: HostModel;
  ngOnInit() {
    this.host = history.state.host;
    this.profileForm.patchValue({
      first_name: this.host.user.first_name,
      last_name: this.host.user.last_name,
      email: this.host.user.email,
      company_name: this.host.company_name,
      company_contact_email: this.host.company_contact_email,
      company_contact_no: this.host.company_contact_no
    })
  }
  profileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    company_name: new FormControl(''),
    company_contact_email: new FormControl(''),
    company_contact_no: new FormControl(0),
  })
}
