import {Component, inject, signal} from '@angular/core';
import {NavbarTitleService} from '../../../core/services/state-service/navbar-title-service';
import {ViewBookingsResponse} from '../../../core/models/booking.model';
import {BookingService} from '../../../core/services/booking-services/booking-service';

@Component({
  selector: 'app-view-bookings-component',
  imports: [],
  templateUrl: './view-bookings-component.html',
  styleUrl: './view-bookings-component.scss',
})
export class ViewBookingsComponent {
  private titleService = inject(NavbarTitleService)
  private bookingService = inject(BookingService);
  bookings = signal<ViewBookingsResponse[] | null>(null)
  ngOnInit() {
    this.titleService.setTitle('View Bookings')
    this.getBookings()
  }
  getBookings() {
    this.bookingService.getBookings().subscribe(bookings => {
      this.bookings.set(bookings);
    })
  }
}
