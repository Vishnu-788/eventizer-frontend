import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {CityEvent} from '../../../core/models/event.model';
import {EventService} from '../../../core/services/event-services/event-service';
import {BookingService} from '../../../core/services/booking-services/booking-service';
import {HostEventBooking} from '../../../core/models/booking.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-bookings-component',
  imports: [
    DatePipe
  ],
  templateUrl: './bookings-component.html',
  styleUrl: './bookings-component.scss',
})
export class BookingsComponent {
  navbarService = inject(NavbarTitleService)
  eventService = inject(EventService)
  bookingService = inject(BookingService)

  events = signal<CityEvent[]>([])
  selectedEvent = signal<CityEvent | undefined>(undefined)
  isOpen = signal(false);
  eventBookings = signal<HostEventBooking[]>([])

  ngOnInit() {
    this.navbarService.setTitle('Bookings')
    this.loadEvents()
  }

  loadEvents() {
    this.eventService.getEvents().subscribe((events) => {
      const firstEvent = events[0]
      this.selectedEvent.set(firstEvent)
      this.select(firstEvent)
      this.events.set(events);
    })
  }

  toggleDropdown() { this.isOpen.set(!this.isOpen()); }
  select(event: CityEvent) {
    this.selectedEvent.set(event);
    this.bookingService.getHostEventRelatedBookings(event.id).subscribe(
      bookings => this.eventBookings.set(bookings)
    )
  }
}
