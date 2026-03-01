export interface ViewBookingsResponse {
  id: number;
  username: string;
  email: string;
  event_name: string;
  total_amount: number;
  booking_status: string;
  seat_count: number;
}

interface Seat {
  id: number;
  seat_no: number;
}

export interface HostEventBooking {
  id: number;
  username: string;
  email: string;
  seats: Seat[];
  total_amount: number;
  booking_status: string;
  created_at: string;   // ISO datetime from Django
  updated_at: string;
  user: number;         // user id (FK)
  event: number;        // event id (FK)
}
