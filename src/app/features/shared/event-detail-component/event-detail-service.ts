import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../../core/constants/api-endpoints';
import {EventDetail} from '../../../core/models/event.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventDetailService {
  private http = inject(HttpClient)
  getEventDetail(eventId: number): Observable<EventDetail> {
    console.log("HTTP Event call.")
    return this.http.get<EventDetail>(`${API_ENDPOINTS.GET_EVENT_DETAILS}${eventId}/detail/`);
  }
}
