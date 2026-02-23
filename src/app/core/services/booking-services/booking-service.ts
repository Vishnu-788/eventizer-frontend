import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import {ViewBookingsResponse} from '../../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private http = inject(HttpClient);
  getBookings() {
    return this.http.get<ViewBookingsResponse[]>(API_ENDPOINTS.GET_USER_BOOKINGS)
  }
}
