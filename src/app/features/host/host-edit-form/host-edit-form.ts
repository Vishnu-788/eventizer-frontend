import { Component, inject } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {HostModel, HostProfilePayload} from '../../../core/models/host.model';
import { HostService } from '../../../core/services/host/host-service';
import { HttpErrorResponse } from '@angular/common/http';

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
  hostService = inject(HostService);
  router = inject(Router)
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
    company_contact_no: new FormControl(''),
  })

  handleSubmit() {
    this.hostService.updateHostProfile(this.buildUpdatePayload()).subscribe({
      next: (host: HostModel) => {
        this.router.navigate(['/profile'])
      }, 
      error: (error: HttpErrorResponse) => {
        console.error("Error occurred while updating the host profile: ", error)
      }
    });
  }

// 1. Helper to get the value ONLY if it changed
  getIfChanged(controlName: string, originalValue: any): any {
    const currentValue = this.profileForm.get(controlName)?.value;
    // If the values are the same, return undefined so JSON.stringify removes it
    return currentValue === originalValue ? undefined : currentValue;
  }

  // 2. The Refactored Payload Generator
  buildUpdatePayload(): HostProfilePayload {
    const host = this.host.user;

    return {
      user: {
        username: this.getIfChanged('username', host.username),
        first_name: this.getIfChanged('first_name', host.first_name),
        last_name: this.getIfChanged('last_name', host.last_name),
        email: this.getIfChanged('email', host.email),
      },
      company_name: this.getIfChanged('company_name', this.host.company_name),
      company_contact_email: this.getIfChanged('company_contact_email', this.host.company_contact_email),
      company_contact_no: this.getIfChanged('company_contact_no', this.host.company_contact_no)
    };
  }

}
