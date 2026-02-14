import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SeatModel} from '../../../core/models/seat.model';
import {BookingService} from './booking-service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-booking-component',
  imports: [
    NgClass
  ],
  templateUrl: './booking-component.html',
  styleUrl: './booking-component.scss',
})

export class BookingComponent {

  private activatedRoute = inject(ActivatedRoute)
  private bookingService = inject(BookingService)
  readonly eventId = this.activatedRoute.snapshot.paramMap.get('id');
  totalPrice = signal<number>(0)
  selectedSeatIds = signal<number[]>([])
  eventSeats = signal<SeatModel[][] | null>(null)
  event_price: number | null = null

  ngOnInit() {
    console.log("Booking seats.")
    this.initializeSeats()
  }

  initializeSeats() {
    this.bookingService.getSeats(Number(this.eventId))
        .subscribe({
          next: seatResponse => {
            let seats = seatResponse.seats
            this.event_price = seatResponse.event_price
            this.eventSeats.set(this.bookingService.convertToSeatRows(seats))
          },
          // Later perform a fallback page for this.
          error: err => console.error("Error occurred ate booking component")
        })
  }

  /*
  Adds the id if the id doesn't exist in the array.
  Removes the id if the id exists in the array
   */
  toggleSeatBooking(seat: SeatModel) {
    if(seat.booked) return;
    this.selectedSeatIds.update(ids => {
      if(ids.includes(seat.id)){
        return ids.filter(id => id !== seat.id)
      } else {
        return [...ids, seat.id]
      }
    })
  }
}
