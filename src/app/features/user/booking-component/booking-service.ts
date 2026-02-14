import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SeatModel} from '../../../core/models/seat.model';
import {API_ENDPOINTS} from '../../../core/constants/api-endpoints';
import {Observable} from 'rxjs';

interface SeatResponse {
  event_price: number;
  seats: SeatModel[];
}

@Injectable({
  providedIn: 'root',
})

export class BookingService {
  private http = inject(HttpClient)
  getSeats(eventId: number): Observable<SeatResponse> {
    return this.http.get<SeatResponse>(`${API_ENDPOINTS.GET_EVENT_SEATS}${eventId}`)
  }

  convertToSeatRows(seatsData: SeatModel[]): SeatModel[][] {
    const rows: SeatModel[][] = [];

    for (let i = 0; i < seatsData.length; i += 20) {
      rows.push(seatsData.slice(i, i + 20));
    }
    return rows;
  }
}
