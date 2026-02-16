import {Component, computed, inject, signal} from '@angular/core';
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
  selectedSeats = signal<SeatModel[]>([])
  eventSeats = signal<SeatModel[][] | null>(null)
  errorMessage = signal<string | null>("Error")
  event_price: number | null = null
  totalPrice = computed(() =>
    this.selectedSeats().length * (this.event_price ?? 0)
  );

  selectedSeatNumbers = computed(() => {
    const seats = this.selectedSeats();
    if (!seats.length) return 'None';
    return seats.map(s => s.seat_no).join(', ');
  });


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
    if (seat.booked) return;
    this.selectedSeats.update(seats => {
      const exists = seats.some(s => s.id === seat.id);
      if (exists) {
        return seats.filter(s => s.id !== seat.id);
      } else {
        return [...seats, seat];
      }
    });
  }

  isSeatSelected(seat: SeatModel): boolean {
    return this.selectedSeats().some(s => s.id === seat.id);
  }

  /*
  Data to be passed
  eventId
  seats=seatIds[]
   */
  handleBooking() {
    this.errorMessage.set(null)
    const seats: number[] = this.selectedSeats().map(s => s.id)
    this.bookingService.confirmBooking(
      {'seats': seats, 'event': Number(this.eventId)}
    ).subscribe({
      next: bookingResponse => {
       // handle the success
        console.log("Booking Response: " + bookingResponse)
        this.bookingService.handle_payment(bookingResponse.id).subscribe({
          next: paymentResponse => {
            window.location.href=paymentResponse.approval_url
          },
          error: err => {
            this.errorMessage.set(err.detail)
          }
        })
      },
      error: err => {
        this.errorMessage.set(err.detail)
      }
    })
  }
}
