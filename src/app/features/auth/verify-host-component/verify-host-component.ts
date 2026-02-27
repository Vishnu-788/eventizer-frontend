import {Component, inject, signal} from '@angular/core';
import {HostService} from './host-service';
import {ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
// import {HostDetail} from '../../../core/models/host.model';

@Component({
  selector: 'app-verify-host-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './verify-host-component.html',
  styleUrl: './verify-host-component.scss',
})
export class VerifyHostComponent {
  private hostService = inject(HostService);
  private activatedRoute = inject(ActivatedRoute)
  // host = signal<HostDetail | null>(null)
  showVerificationForm = signal(false)
  errorMessage = signal<string | null>(null)
  formError = signal<string | null>(null)

  hostVerificationForm = new FormGroup({
    company_name: new FormControl('',
      {nonNullable: true, validators: Validators.required}),
    company_contact_no: new FormControl(0,
      {nonNullable: true, validators: Validators.required}),
    company_contact_email: new FormControl('',
      {nonNullable: true, validators: [Validators.required, Validators.email]}),
  })

  ngOnInit() {
     // const username = this.activatedRoute.snapshot.paramMap.get('username')
    this.loadHost()
  }

  handleSubmit() {
    this.hostService.completeHostVerification(this.hostVerificationForm.getRawValue())
      .subscribe({
        next: success => {
          this.showVerificationForm.set(false)
          this.loadHost()
        },
        error: error => {}
      })
  }

  private loadHost() {
    this.hostService.getHostFullDetails()
    .subscribe({
      next: host => {
        // this.host.set(host);
        console.log("Successfully got the data" + host)
       },
      error: err => {
        if(err.error.code === "verification_not_started") {
          this.showVerificationForm.set(true)
        } else {
          this.errorMessage.set(err.detail)
        }
      }
    })
  }
}
