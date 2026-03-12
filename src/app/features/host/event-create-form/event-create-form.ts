import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EventService} from '../../../core/services/event-services/event-service';
import {EventPayload} from '../../../core/models/event.model';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';

@Component({
  selector: 'app-event-create-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './event-create-form.html',
  styleUrl: './event-create-form.scss',
})
export class EventCreateForm {
  private eventService = inject(EventService);
  private navbarService = inject(NavbarTitleService)
  protected errorMessage = signal<string | null>(null)
  isSubmitting = signal(false)

  ngOnInit() { this.navbarService.setTitle('Create Event')}

  eventForm = new FormGroup({
    e_title: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    e_description: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    e_venue: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    e_date: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    e_start_time: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    e_end_time: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    e_category: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    total_seats: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
    price: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
  })

  handleSubmit() {
    if(this.eventForm.invalid){
      this.eventForm.markAllAsTouched();
      this.errorMessage.set("Please complete the given details")
      return
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null)
    this.eventForm.disable()
    const event = this.eventForm.getRawValue()

    const startDateTime = new Date(`${event.e_date}T${event.e_start_time}`);
    const endDateTime = new Date(`${event.e_date}T${event.e_end_time}`);

    const payload = {
      ...event,
      e_start_time: startDateTime.toISOString(),
      e_end_time: endDateTime.toISOString(),
    }

    this.eventService.createEvent(payload).subscribe({
      next: event => {
        this.eventForm.reset();
        this.isSubmitting.set(false);
        this.eventForm.enable()
      },
      error: err => {
        this.isSubmitting.set(false);
        this.errorMessage.set(err.error.detail)
        console.log("Error creating Event: " + err.error.detail)
        this.eventForm.enable();
      },
    })
  }

  get e_title() {return this.eventForm.get('e_title');}
  get e_description() {return this.eventForm.get('e_description');}
  get e_venue() {return this.eventForm.get('e_venue');}
  get e_date() {return this.eventForm.get('e_date');}
  get e_start_time() {return this.eventForm.get('e_start_time');}
  get e_end_time() {return this.eventForm.get('e_end_time');}
  get e_category() {return this.eventForm.get('e_category');}
  get price() {return this.eventForm.get('price');}
  get total_seats() {return this.eventForm.get('total_seats');}

}
