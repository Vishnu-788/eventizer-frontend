import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../constants/api-endpoints';
import {HostEventBooking, ViewBookingsResponse} from '../../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private http = inject(HttpClient);
  getBookings() {
    return this.http.get<ViewBookingsResponse[]>(API_ENDPOINTS.GET_USER_BOOKINGS)
  }

  getHostEventRelatedBookings(eventId: number)  {
    return this.http.get<HostEventBooking[]>(`${API_ENDPOINTS.GET_HOST_EVENT_RELATED_BOOKINGS}${eventId}/`)
  }

}
