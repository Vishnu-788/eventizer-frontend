import {Component, effect, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {UserProfile} from '../../../core/models/user.model';
import {ProfileService} from '../../../core/services/profile-services/profile-service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-component',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.scss',
})

export class ProfileComponent {
  private titleService = inject(NavbarTitleService)
  private profileService = inject(ProfileService)
  profileData = signal<UserProfile | null>(null)
  editable = signal(false)
  errorMessage = signal<string | null>(null)
  constructor() {
    effect(() => {
      const profile = this.profileData();

      if (profile && this.profileForm.pristine) {
        this.profileForm.patchValue(profile, { emitEvent: false });
      }
    });
  }
  ngOnInit() {
    this.titleService.setTitle('Profile')
    this.getProfileDetails()
  }

  profileForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_]{3,20}$')
      ]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    first_name: new FormControl('', {nonNullable: true}),
    last_name: new FormControl('', {nonNullable: true}),
  })

  getProfileDetails() {
    this.profileService.getUserProfile().subscribe(payload => {
      this.profileData.set(payload)
    })
  }

  handleSubmit() {
    this.editable.set(false)
    this.profileForm.disable()
    this.profileService.updateUserProfile(this.profileForm.getRawValue()).subscribe({
      next: value => { this.profileData.set(value)},
      error: error => {
        this.errorMessage.set(error.detail)}
    })
  }

  toggleEdit() {
    this.editable.set(!this.editable())
    if(this.editable()) {
      this.profileForm.enable()
    } else {
      this.profileForm.disable()
    }
  }
}
