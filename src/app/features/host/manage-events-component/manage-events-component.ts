import {Component, inject, signal} from '@angular/core';
import {EventCardComponent} from '../../shared/event-card-component/event-card-component';

import {CityEvent} from '../../../core/models/event.model';
import {EventService} from '../../../core/services/event-services/event-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-manage-events-component',
  imports: [
    EventCardComponent,
    RouterLink
  ],
  templateUrl: './manage-events-component.html',
  styleUrl: './manage-events-component.scss',
})
export class ManageEventsComponent {
  private eventService = inject(EventService)
  private errorMessage = signal<string | null>(null)
  events = signal<CityEvent[] | null>(null);

  ngOnInit() {
    this.loadEvents()
  }

  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: events => {
        this.events.set(events)
      },
      error: err => {
        this.errorMessage.set(err.detail)
        console.log("Error at Event Manage HOST")
      }
    })
  }
}
